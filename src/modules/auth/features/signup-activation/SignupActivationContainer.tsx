import { LoadingOverlay } from 'shared-ui/molecules/LoadingOverlay';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ApplicationState } from 'shared-state/applicationState';
import { DispatchType } from 'shared-state/configureStore';
import { activationThunk } from 'shared-state/global/authorization/reducer';
import { Hero, HeroSubtitle } from 'shared-ui/atoms/Hero';
import Container from 'shared-ui/atoms/Container';
interface ActivationParams {
    activationToken: string;
    email: string;
}

export const SignupActivationContainer: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<DispatchType>();
    const activationPending = useSelector((state: ApplicationState) => state.authorization.activationPending);
    const activationError = useSelector((state: ApplicationState) => state.authorization.activationError);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    useEffect(() => {
        if (token && email) {
            const params: ActivationParams = { activationToken: token, email: email };
            dispatch(activationThunk(params)).then(response => {
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate('/im/login');
                }
            });
        }
    }, [dispatch, navigate, token, email]);

    return (
        <Container>
            {activationPending && <LoadingOverlay pending />}
            {activationError && !activationPending && (
                <Hero>
                    <HeroSubtitle>Activation failed. Your activation link may be invalid or expired.</HeroSubtitle>
                </Hero>
            )}
        </Container>
    );
};
