import { LoginResponse } from 'core/domainModels/authorization/responses/loginResponse';
import { SignupRequest } from 'core/domainModels/authorization/requests/signupRequest';
import { User } from 'core/domainModels/users/user';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { authEndpointURL as authURL } from './common';
import { mapApiModelToLoginResponse } from './mappings/mapApiModelToLoginResponse';
import { mapApiModelToUserInfo } from './mappings/mapApiModelToUser';

export const authLogin = (username: string, password: string): Promise<LoginResponse> => {
    const authLoginURL = `${authURL}/login`;
    let loginForm = new FormData();
    loginForm.append('username', username);
    loginForm.append('password', password);

    return axios
        .post(authLoginURL, loginForm)
        .then(response => {
            const responseModel = mapApiModelToLoginResponse(response.data);
            if (!responseModel || !responseModel.accessToken) {
                throw new Error('Login action failed');
            }

            return responseModel as LoginResponse;
        })
        .catch((err: any) => {
            throw new Error(err);
        });
};

export const authSignup = (model: SignupRequest): Promise<string> => {
    const authSignupURL = `${authURL}/register`;

    return axios
        .post(authSignupURL, model)
        .then(response => {
            if (!response) {
                throw new Error('Signup action failed');
            }
            return response.data.userId;
        })
        .catch((err: any) => {
            throw new Error(err);
        });
};

export const authLogout = (): Promise<string> => {
    const authSignupURL = `${authURL}/api/logout`;

    return axios
        .get(authSignupURL)
        .then(response => {
            if (!response) {
                throw new Error('Logout action failed');
            }
            return response.data;
        })
        .catch((err: any) => {
            throw new Error(err);
        });
};

export const authActivation = (email: string, activationToken: string): Promise<any> => {
    const authSignupURL = `${authURL}/confirm-user`;

    return axios
        .put(authSignupURL, { email, activationToken })
        .then(response => {
            return response.data;
        })
        .catch((err: any) => {
            throw new Error(err);
        });
};

export const authUserDetails = (): Promise<User> => {
    const authLoginURL = `${authURL}/api/me/info`;

    return axios
        .get(authLoginURL)
        .then(response => {
            const responseModel = mapApiModelToUserInfo(response.data.data);
            if (!responseModel) {
                throw new Error('Get user info action failed');
            }
            return responseModel as User;
        })
        .catch((err: any) => {
            throw new Error(err);
        });
};
