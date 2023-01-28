import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    authActivation,
    authLogin,
    authLogout,
    authSignup,
    authUserDetails,
} from 'core/api/endpoints/authorization/authorization';
import { User } from 'core/domainModels/users/user';
import TokenStorage from 'core/services/tokenStorage/tokenStorage';
import { resetReduxAction } from 'state/actions';
import { SignupRequest } from 'core/domainModels/authorization/requests/signupRequest';
import { getUserDetails, updateUser } from 'core/api/endpoints/users/users';

export interface UsersState {
    authenticatedUser: User | undefined;
    user: User | undefined;
    fetchAuthenticatedUserPending: boolean;
    fetchAuthenticatedUserError: string;
    fetchUserPending: boolean;
    fetchUserError: string;
    updateUserPending: boolean;
    updateUserError: string;
}

const initialState: UsersState = {
    user: undefined,
    authenticatedUser: undefined,
    fetchAuthenticatedUserPending: false,
    fetchAuthenticatedUserError: '',
    updateUserPending: false,
    updateUserError: '',
    fetchUserPending: false,
    fetchUserError: '',
};

const name = 'users';

const updateUserThunk = createAsyncThunk(
    `${name}/update/user`,
    async (
        params: {
            userId: string;
            changes: Partial<User>;
        },
        thunkAPI,
    ) => {
        try {
            const updatedUser = await updateUser(params.changes, params.userId);
            if (!updatedUser) {
                thunkAPI.rejectWithValue('User update failed');
            }
            return updatedUser;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const fetchUserThunk = createAsyncThunk(
    `${name}/fetch/user`,
    async (
        params: {
            userId: string;
        },
        thunkAPI,
    ) => {
        try {
            const user: User = await getUserDetails(params.userId);
            if (!user) {
                thunkAPI.rejectWithValue('Fetching authorized user failed');
            }
            return user as User;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const fetchAuthenticatedUserThunk = createAsyncThunk(`${name}/auth/fetch/user`, async (params, thunkAPI) => {
    try {
        const authenticatedUser: User = await authUserDetails();
        if (!authenticatedUser) {
            thunkAPI.rejectWithValue('Fetching authorized user failed');
        }
        return authenticatedUser as User;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAuthenticatedUserThunk.pending, (state, action) => {
            state.fetchAuthenticatedUserPending = true;
            state.fetchAuthenticatedUserError = '';
        });
        builder.addCase(fetchAuthenticatedUserThunk.fulfilled, (state, action) => {
            state.authenticatedUser = action.payload;
            state.fetchAuthenticatedUserPending = false;
            state.fetchAuthenticatedUserError = '';
        });
        builder.addCase(fetchAuthenticatedUserThunk.rejected, (state, action) => {
            state.fetchAuthenticatedUserPending = false;
            state.fetchAuthenticatedUserError = action.error.toString();
        });
        builder.addCase(fetchUserThunk.pending, (state, action) => {
            state.fetchUserPending = true;
            state.fetchUserError = '';
        });
        builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
            console.log('fetchUserThunk.fulfilled', action.payload);
            state.user = action.payload;
            state.fetchUserPending = false;
            state.fetchUserError = '';
        });
        builder.addCase(fetchUserThunk.rejected, (state, action) => {
            state.fetchUserPending = false;
            state.fetchUserError = action.error.toString();
        });
        builder.addCase(updateUserThunk.pending, (state, action) => {
            state.updateUserPending = true;
            state.updateUserError = '';
        });
        builder.addCase(updateUserThunk.fulfilled, (state, action) => {
            state.updateUserPending = false;
            state.authenticatedUser = state.user ? { ...state.user, ...action.payload } : undefined;
            state.updateUserError = '';
        });
        builder.addCase(updateUserThunk.rejected, (state, action) => {
            state.updateUserPending = false;
            state.updateUserError = action.error.toString();
        });
    },
});

const { reducer } = usersSlice;

export { reducer as usersReducer };
export { fetchAuthenticatedUserThunk, updateUserThunk, fetchUserThunk };
