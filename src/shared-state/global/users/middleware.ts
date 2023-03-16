import { Action } from 'redux';
import { DispatchType, StoreType } from 'shared-state/configureStore';
import { loginCachedUserThunk, loginThunk } from '../authorization/reducer';
import { fetchAuthenticatedUserThunk } from './reducer';

export const usersMiddleware = (store: StoreType) => (next: DispatchType) => (action: Action) => {
    if (loginThunk.fulfilled.match(action) || loginCachedUserThunk.fulfilled.match(action)) {
        store.dispatch(fetchAuthenticatedUserThunk());
    }
    return next(action);
};
