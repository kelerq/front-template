import TokenStorage from 'core/services/tokenStorage/tokenStorage';

export async function fetchWithAccessToken(input: RequestInfo, init?: RequestInit, accessToken?: string): Promise<Response> {
    const token = accessToken || TokenStorage.readToken();

    const headersWithAuthorization = {
        ...init?.headers,
        Authorization: `Bearer ${token}`,
    };

    const updatedInit: RequestInit = {
        ...init,
        headers: headersWithAuthorization,
    };

    return fetch(input, updatedInit);
}
