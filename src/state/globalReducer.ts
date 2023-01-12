import { fieldName } from 'core/helpers/aggrid';
import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { resetReduxAction } from './actions';
import { ApplicationState } from './applicationState';
import { authorizationReducer, logoutThunk } from './global/authorization/reducer';

const state = {
    authorization: authorizationReducer,
};

const combinedReducers = combineReducers<ApplicationState>(state);

const globalReducer: Reducer<ApplicationState> = (state, action) => {
    if (resetReduxAction.match(action) || logoutThunk.fulfilled.match(action)) {
        return combinedReducers({ authorization: state?.authorization } as ApplicationState, action);
    }

    return combinedReducers(state, action);
};

const persistConfig: PersistConfig<ApplicationState> = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [],
    blacklist: [fieldName<typeof state>('authorization')],
};

export const persistedReducer = persistReducer(persistConfig, globalReducer);
