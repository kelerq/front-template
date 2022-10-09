import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authLogin, refreshToken } from 'core/api/endpoints/auth/auth';
import { User } from 'core/domainModels/authorization/user';
import TokenStorage from 'core/services/tokenStorage/tokenStorage';
import { decodeJWT } from 'core/helpers/authorization';
import { IRequestError } from 'core/api/models/iRequestError';
import { resetReduxAction } from 'state/actions';

export interface AuthorizationState {
    authenticated: boolean;
    user: User | undefined;
    loginPending: boolean;
    loginError: string;
    cachedUserLoginPending: boolean;
    cachedUserLoginError: string;
}

const initialState: AuthorizationState = {
    authenticated: false,
    user: undefined,
    loginPending: false,
    loginError: '',
    cachedUserLoginPending: false,
    cachedUserLoginError: '',
};

const name = 'authorization';

type LoginThunkParams = {
    username: string;
    password: string;
};

const loginThunk = createAsyncThunk(`${name}/login`, async (params: LoginThunkParams, thunkAPI) => {
    try {
        const token = await authLogin(params.username, params.password);
        TokenStorage.saveToken(token);
        return decodeJWT(token);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const loginCachedUserThunk = createAsyncThunk(
    `${name}/loginCachedUser`,
    async (params: {}, thunkAPI) => {
        try {
            const token = await refreshToken();
            TokenStorage.saveToken(token);
            return decodeJWT(token);
        } catch (error) {
            TokenStorage.removeToken();
            return thunkAPI.rejectWithValue(error);
        }
    },
    {
        condition: (params: {}, { getState, extra }) => {
            const savedToken = TokenStorage.readToken();
            if (!savedToken) {
                return false;
            }
        },
    },
);

const logoutThunk = createAsyncThunk<boolean, void, {}>(`${name}/logout`, async (params, thunkAPI) => {
    TokenStorage.removeToken();
    return true;
});

const authorizationSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state, action) => {
                state.loginPending = true;
                state.loginError = '';
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.authenticated = true;
                state.loginError = '';
                state.loginPending = false;
                state.user = action.payload;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loginPending = false;
                state.loginError = (action.payload as IRequestError)?.toString();
            })
            .addCase(loginCachedUserThunk.pending, (state, action) => {
                state.cachedUserLoginPending = true;
                state.cachedUserLoginError = '';
            })
            .addCase(loginCachedUserThunk.fulfilled, (state, action) => {
                state.cachedUserLoginPending = false;
                state.user = action.payload;
                state.authenticated = true;
            })
            .addCase(loginCachedUserThunk.rejected, (state, action) => {
                state.cachedUserLoginPending = false;
                state.authenticated = false;
                state.cachedUserLoginError = (action.payload as IRequestError)?.toString();
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                state.authenticated = false;
                state.user = undefined;
            })
            .addCase(resetReduxAction, (state, action) => {
                if (action.payload.preserveAuth) {
                    return state;
                }
            });
    },
});

const { reducer } = authorizationSlice;

export { reducer as authorizationReducer };
export { loginThunk, loginCachedUserThunk, logoutThunk };
