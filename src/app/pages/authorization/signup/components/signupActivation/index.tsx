import { Container } from 'app/components/Container';
import { Hero, HeroSubtitle, HeroTitle } from 'app/components/Hero';
import { LoadingOverlay } from 'app/components/LoadingOverlay';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ApplicationState } from 'state/applicationState';
import { DispatchType } from 'state/configureStore';
import { activationThunk } from 'state/global/authorization/reducer';

export const SignupActivation = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<DispatchType>();
    const activationPending = useSelector((state: ApplicationState) => state.authorization.activationPending);
    const activationError = useSelector((state: ApplicationState) => state.authorization.activationError);
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    useEffect(() => {
        if (token && email) {
            dispatch(activationThunk({ activationToken: token, email: email })).then(response => {
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate('/im/login');
                }
            });
        }
    }, [token, email]);

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
