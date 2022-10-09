import { combineReducers, Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { PersistConfig } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';
import { ApplicationState } from './applicationState';

const state = {};

const combinedReducers = combineReducers<ApplicationState>(state);

const globalReducer: Reducer<ApplicationState> = (state, action) => {
    return combinedReducers(state, action);
};

const persistConfig: PersistConfig<ApplicationState> = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [],
    blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, globalReducer);
