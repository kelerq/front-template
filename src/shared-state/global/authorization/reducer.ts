import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authActivation, authLogin, authLogout, authSignup } from 'core/api/endpoints/authorization/authorization';

import TokenStorage from 'core/services/tokenStorage/tokenStorage';
import { resetReduxAction } from 'shared-state/actions';
import { SignupRequest } from 'core/domainModels/authorization/signupRequest';

export interface AuthorizationState {
    authenticated: boolean;
    loginPending: boolean;
    loginError: string;
    signupPending: boolean;
    signupError: string;
    activationPending: boolean;
    activationError: string;
    cachedUserLoginPending: boolean;
    cachedUserLoginError: string;
}

const initialState: AuthorizationState = {
    authenticated: false,
    loginPending: false,
    loginError: '',
    signupPending: false,
    signupError: '',
    cachedUserLoginPending: false,
    cachedUserLoginError: '',
    activationPending: false,
    activationError: '',
};

const name = 'authorization';

const activationThunk = createAsyncThunk(
    `${name}/activation`,
    async (
        params: {
            email: string;
            activationToken: string;
        },
        thunkAPI,
    ) => {
        try {
            const activationResponse = await authActivation(params.email, params.activationToken);
            if (!activationResponse) {
                thunkAPI.rejectWithValue('Activation failed');
            }
            return activationResponse;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const signupThunk = createAsyncThunk(`${name}/signup`, async (params: SignupRequest, thunkAPI) => {
    try {
        const signupResponse: string = await authSignup(params);
        if (!signupResponse) {
            thunkAPI.rejectWithValue('User singup failed');
        }
        return signupResponse;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const loginThunk = createAsyncThunk(
    `${name}/login`,
    async (
        params: {
            email: string;
            password: string;
        },
        thunkAPI,
    ) => {
        try {
            const loginResponse = await authLogin(params.email, params.password);
            if (!loginResponse) {
                thunkAPI.rejectWithValue('Login user failed');
            }
            TokenStorage.saveToken(loginResponse.accessToken);
            return true;
        } catch (error) {
            TokenStorage.removeToken();
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const loginCachedUserThunk = createAsyncThunk(
    `${name}/loginCachedUser`,
    async (params: {}, thunkAPI) => {
        try {
            const savedToken = TokenStorage.readToken();
            if (!savedToken) {
                thunkAPI.rejectWithValue('Login cached user failed');
            }
            return true;
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
    try {
        const logoutResponse = await authLogout();
        if (!logoutResponse) {
            thunkAPI.rejectWithValue('Logout action failed');
        }
        TokenStorage.removeToken();
        return true;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
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
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loginPending = false;
                state.loginError = action.error.toString();
            })
            .addCase(signupThunk.pending, (state, action) => {
                state.signupPending = true;
                state.signupError = '';
            })
            .addCase(signupThunk.fulfilled, (state, action) => {
                state.signupError = '';
                state.signupPending = false;
            })
            .addCase(signupThunk.rejected, (state, action) => {
                state.signupPending = false;
                state.signupError = action.error.toString();
            })
            .addCase(activationThunk.pending, (state, action) => {
                state.activationPending = true;
                state.activationError = '';
            })
            .addCase(activationThunk.fulfilled, (state, action) => {
                state.activationError = '';
                state.activationPending = false;
            })
            .addCase(activationThunk.rejected, (state, action) => {
                state.activationPending = false;
                state.activationError = action.error.toString();
            })
            .addCase(loginCachedUserThunk.pending, (state, action) => {
                state.cachedUserLoginPending = true;
                state.cachedUserLoginError = '';
            })
            .addCase(loginCachedUserThunk.fulfilled, (state, action) => {
                state.cachedUserLoginPending = false;
                state.authenticated = true;
            })
            .addCase(loginCachedUserThunk.rejected, (state, action) => {
                state.cachedUserLoginPending = false;
                state.authenticated = false;
                state.cachedUserLoginError = action.error.toString();
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {
                state.authenticated = false;
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
export { loginThunk, logoutThunk, loginCachedUserThunk, signupThunk, activationThunk };
