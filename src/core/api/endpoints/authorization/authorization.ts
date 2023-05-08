import { LoginResponse } from 'core/domainModels/authorization/loginResponse';
import { SignupRequest } from 'core/domainModels/authorization/signupRequest';
import { User } from 'core/domainModels/users/user';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { mapApiModelToUser } from '../users/mappings/mapApiModelToUser';
import { authEndpointURL as authURL } from './common';
import { mapApiModelToLoginResponse } from './mappings/mapApiModelToLoginResponse';

export const authLogin = async (username: string, password: string): Promise<LoginResponse> => {
    const authLoginURL = `${authURL}/api/auth/login`;
    const loginForm = new FormData();
    loginForm.append('username', username);
    loginForm.append('password', password);

    try {
        const response = await axios.post(authLoginURL, loginForm);
        const responseModel = mapApiModelToLoginResponse(response.data);

        if (!responseModel || !responseModel.accessToken) {
            throw new Error('Login action failed');
        }

        return responseModel as LoginResponse;
    } catch (err) {
        throw new Error('Login action failed');
    }
};

export const authSignup = async (model: SignupRequest): Promise<string> => {
    const authSignupURL = `${authURL}/register`;

    try {
        const response = await axios.post(authSignupURL, model);

        if (!response) {
            throw new Error('Signup action failed');
        }

        return response.data.userId;
    } catch (err) {
        throw new Error('Signup action failed');
    }
};

export const authLogout = async (): Promise<string> => {
    const authLogoutURL = `${authURL}/api/auth/logout`;

    try {
        const response = await axios.get(authLogoutURL);

        if (!response) {
            throw new Error('Logout action failed');
        }

        return response.data;
    } catch (err) {
        throw new Error('Logout action failed');
    }
};

export const authActivation = async (email: string, activationToken: string): Promise<any> => {
    const authActivationURL = `${authURL}/confirm-user`;

    try {
        const response = await axios.put(authActivationURL, { email, activationToken });
        return response.data;
    } catch (err) {
        throw new Error('Activation action failed');
    }
};

export const authUserDetails = async (): Promise<User> => {
    const authUserDetailsURL = `${authURL}/api/me/info`;

    try {
        const response = await axios.get(authUserDetailsURL);
        const responseModel = mapApiModelToUser(response.data.data);

        if (!responseModel) {
            throw new Error('Get user info action failed');
        }

        return responseModel as User;
    } catch (err) {
        throw new Error('Get user info action failed');
    }
};
