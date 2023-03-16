import { resetReduxAction } from './actions';
import { ApplicationState } from './applicationState';
import { persistor } from './store';

export const resetRedux = (dispatch, getState: () => ApplicationState) => {
    const state = getState();
    persistor.purge();
    dispatch(resetReduxAction({ preserveAuth: false }));

    const user = state.users.user;
    if (user) {
        //  dispatch(initializeApplication(user, { skipDisplayPreferencesFetch: true }));
    }
};
