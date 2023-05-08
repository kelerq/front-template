import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authUserDetails } from 'core/api/endpoints/authorization/authorization';
import { User } from 'core/domainModels/users/user';
import { resetReduxAction } from 'shared-state/actions';
import { changeEmail, changePassword, confirmEmail, getUserDetails, updateUser } from 'core/api/endpoints/users/users';

export interface UsersState {
    authenticatedUser: User | undefined;
    user: User | undefined;
    fetchAuthenticatedUserPending: boolean;
    fetchAuthenticatedUserError: string;
    fetchUserPending: boolean;
    fetchUserError: string;
    updateUserPending: boolean;
    updateUserError: string;
    updateAuthenticatedUserPending: boolean;
    updateAuthenticatedUserError: string;
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
    updateAuthenticatedUserPending: false,
    updateAuthenticatedUserError: '',
};

const name = 'users';

const updateUserThunk = createAsyncThunk(
    `${name}/update/user`,
    async (
        params: {
            userId: string;
            changes: {
                firstName: string;
                lastName: string;
            };
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

const updateAuthenticatedUser = createAsyncThunk(
    `${name}/update/user/authenticated`,
    async (
        params: {
            userId: string;
            changes: {
                firstName: string;
                lastName: string;
            };
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
const changePasswordAuthenticatedUser = createAsyncThunk(
    `${name}/change-password/user/authenticated`,
    async (
        params: {
            userId: string;
            changes: {
                plainPassword: string;
                repeatPlainPassword: string;
            };
        },
        thunkAPI,
    ) => {
        try {
            const response = await changePassword(params.userId, {
                plainPassword: params.changes.plainPassword,
                repeatPlainPassword: params.changes.repeatPlainPassword,
            });
            if (!response) {
                thunkAPI.rejectWithValue('User update failed');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const changeEmailAuthenticatedUser = createAsyncThunk(
    `${name}/change-email/user/authenticated`,
    async (
        params: {
            userId: string;
            email: string;
        },
        thunkAPI,
    ) => {
        try {
            const updatedEmail = await changeEmail(params.userId, params.email);
            if (!updatedEmail) {
                thunkAPI.rejectWithValue('User update failed');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const confirmEmailAuthenticatedUser = createAsyncThunk(
    `${name}/confirm-email/user/authenticated`,
    async (
        params: {
            email: string;
            token: string;
        },
        thunkAPI,
    ) => {
        try {
            const updatedEmail = await confirmEmail(params.email, params.token);
            if (!updatedEmail) {
                thunkAPI.rejectWithValue('User update failed');
            }

            return updatedEmail;
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
            state.authenticatedUser = { ...state.user, ...action.payload } as User;
            state.updateUserError = '';
        });
        builder.addCase(updateUserThunk.rejected, (state, action) => {
            state.updateUserPending = false;
            state.updateUserError = action.error.toString();
        });
        builder.addCase(updateAuthenticatedUser.pending, (state, action) => {
            state.updateAuthenticatedUserPending = true;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(updateAuthenticatedUser.fulfilled, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.authenticatedUser = { ...state.authenticatedUser, ...action.payload } as User;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(updateAuthenticatedUser.rejected, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = action.error.toString();
        });
        builder.addCase(changeEmailAuthenticatedUser.pending, (state, action) => {
            state.updateAuthenticatedUserPending = true;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(changeEmailAuthenticatedUser.fulfilled, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(changeEmailAuthenticatedUser.rejected, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = action.error.toString();
        });
        builder.addCase(changePasswordAuthenticatedUser.pending, (state, action) => {
            state.updateAuthenticatedUserPending = true;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(changePasswordAuthenticatedUser.fulfilled, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(changePasswordAuthenticatedUser.rejected, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = action.error.toString();
        });
        builder.addCase(confirmEmailAuthenticatedUser.pending, (state, action) => {
            state.updateAuthenticatedUserPending = true;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(confirmEmailAuthenticatedUser.fulfilled, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.authenticatedUser = { ...state.authenticatedUser, email: action.payload } as User;
            state.updateAuthenticatedUserError = '';
        });
        builder.addCase(confirmEmailAuthenticatedUser.rejected, (state, action) => {
            state.updateAuthenticatedUserPending = false;
            state.updateAuthenticatedUserError = action.error.toString();
        });
        builder.addCase(resetReduxAction, (state, action) => {
            state.authenticatedUser = undefined;
            state.user = undefined;
            state.fetchAuthenticatedUserPending = false;
            state.fetchAuthenticatedUserError = '';
            state.updateUserPending = false;
            state.updateUserError = '';
            state.fetchUserPending = false;
            state.fetchUserError = '';
        });
    },
});

const { reducer } = usersSlice;

export { reducer as usersReducer };
export {
    fetchAuthenticatedUserThunk,
    updateUserThunk,
    fetchUserThunk,
    updateAuthenticatedUser,
    changeEmailAuthenticatedUser,
    confirmEmailAuthenticatedUser,
    changePasswordAuthenticatedUser,
};
