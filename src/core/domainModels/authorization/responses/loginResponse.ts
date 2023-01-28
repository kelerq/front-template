export interface LoginResponse {
    tokenType: string;
    expiresIn: number;
    accessToken: string;
    refreshToken: string;
}
