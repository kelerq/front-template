import TokenStorage from 'core/services/tokenStorage/tokenStorage';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { authEndpointURL } from '../endpoints/authorization/common';

export const axiosInstance = axios.create();
//let tokenRefreshPending: Promise<string> | false = false;

const CancelToken = axios.CancelToken;
let cancel;

axiosInstance.interceptors.request.use(
    async config => {
        const accesToken = TokenStorage.readToken();
        if (accesToken) {
            config.headers = {
                Authorization: `Bearer ${accesToken}`,
                //       crossDomain: true,
            };
        }
        // config.withCredentials = true;

        config.cancelToken = new CancelToken(function executor(c) {
            cancel = c;
        });

        console.log(
            `${new Date()} - Method: ${config.method?.toUpperCase()} - URL: ${config.url} - Data: ${JSON.stringify(
                config.data,
            )} - Params: ${JSON.stringify(config.params)} - Headers: ${JSON.stringify(config.headers)}`,
        );
        return config;
    },
    error => {
        console.log(`Request has failed`, error);
        Promise.reject(error);
    },
);

export const cancelTokenFun = () => {
    if (cancel) {
        cancel();
    }
};

type RetryRequestConfig = AxiosRequestConfig & { _retry: boolean };
axiosInstance.interceptors.response.use(response => {
    console.log(`Request succeed | ${response.config.url} | Data ${JSON.stringify(response.data)}`);
    return response;
}, handleRequestError);

async function handleRequestError(error) {
    console.log('Intercepting erronous request', error.config);
    const originalRequest: RetryRequestConfig = error.config;
    await transformBlobRequestsErrorResponse(originalRequest, error);

    if ((error.config as AxiosRequestConfig)?.url?.endsWith(authEndpointURL)) {
        console.log('Auth requests could not be auto refreshed.');
        return Promise.reject(error);
    }
    if (error?.response?.status === 401 && !originalRequest._retry) {
        console.log('Unauthorized refreshing token');
        originalRequest._retry = true;
        // await reauthenticate();
        configureRequest(originalRequest);
        return axiosInstance(originalRequest);
    } else if (originalRequest._retry && error?.response?.status === 401) {
        console.log('Token retrival request failed', originalRequest);
        TokenStorage.removeToken();
    } else {
        console.log('Request has failed due to invalid data send or server error', error);
    }
    return Promise.reject(error);
}

// const reauthenticate = async () => {
//     try {
//         const accesToken = await tokenRefresher();
//         TokenStorage.saveToken(accesToken);
//         axios.defaults.headers.common['Authorization'] = `Bearer ${accesToken}`;
//     } catch (error) {
//         console.log('An error occured while reauthenticating user', error);
//         TokenStorage.removeToken();
//         throw error;
//     }
// };

const configureRequest = (requestConfig: RetryRequestConfig) => {
    if (requestConfig.data) {
        try {
            const jsonBody = JSON.parse(requestConfig.data);
            requestConfig.data = jsonBody;
        } catch (e) {
            console.log('Request body not recognized to be a JSON.');
        }
    }
};

// const tokenRefresher = () => {
//     if (!tokenRefreshPending) {
//         tokenRefreshPending = (async () => {
//             try {
//                 console.log('Calling refersh token');
//                 return await refreshToken();
//             } finally {
//                 tokenRefreshPending = false;
//             }
//         })();
//     }

//     console.log('Token refresh in progres return existing promise');
//     return tokenRefreshPending;
// };

const transformBlobRequestsErrorResponse = async (request: RetryRequestConfig, error: AxiosError) => {
    if (request.responseType === 'blob' && error.response?.data instanceof Blob) {
        try {
            error.response.data = JSON.parse(await error.response.data.text());
        } catch (e) {
            console.log('Request response is not a JSON, cannot transform to json form.', e);
        }
    }
};
