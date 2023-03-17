import { LoginResponse } from 'core/domainModels/authorization/loginResponse';
import { LoginResponseApiModel } from '../models/loginResponseApiModel';

export const mapApiModelToLoginResponse = ({
    token_type,
    expires_in,
    access_token,
    refresh_token,
}: LoginResponseApiModel): LoginResponse => ({
    tokenType: token_type,
    expiresIn: expires_in,
    accessToken: access_token,
    refreshToken: refresh_token,
});
