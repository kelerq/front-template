import { AuthorizationState } from './global/authorization/reducer';
import { UsersState } from './global/users/reducer';

export interface ApplicationState {
    authorization: AuthorizationState;
    users: UsersState;
}
