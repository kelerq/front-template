import { Action, applyMiddleware, createStore, Middleware } from 'redux';
import { ApplicationState } from './applicationState';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { persistedReducer } from './globalReducer';
import { usersMiddleware } from './global/users/middleware';

export type DispatchType = ThunkDispatch<ApplicationState, undefined, Action>;
const middleware: Array<Middleware> = [
    thunk,
    /* specific reducers middlewares */
    usersMiddleware,

    /* global middlewares */
];

export function configureStore(initialState?: ApplicationState & PersistPartial) {
    const store = createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware<DispatchType, ApplicationState>(...middleware)),
    );
    const persistor = persistStore(store);
    return { store, persistor };
}

export type StoreType = { dispatch: DispatchType; getState: () => ApplicationState };
