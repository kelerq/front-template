import { LoginResponse } from 'core/domainModels/authorization/responses/loginResponse';

export const mapApiModelToLoginResponse = (apiModel): LoginResponse => {
    return {
        tokenType: apiModel.token_type,
        expiresIn: apiModel.expires_in,
        accessToken: apiModel.access_token,
        refreshToken: apiModel.refresh_token,
    };
};
