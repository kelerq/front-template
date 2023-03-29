import { useDispatch } from 'react-redux';
import { DispatchType } from 'shared-state/configureStore';
import { logoutThunk } from 'shared-state/global/authorization/reducer';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const dispatch = useDispatch<DispatchType>();
    const navigate = useNavigate();

    const logout = () => dispatch(logoutThunk()).then(() => navigate('/im/auth/login'));

    return logout;
};
