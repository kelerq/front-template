import React from 'react';
import Container from 'shared-ui/atoms/Container';
import { Hero, HeroTitle, HeroSubtitle } from 'shared-ui/atoms/Hero';

export const SignupInfoContainer: React.FC = () => {
    return (
        <Container>
            <Hero>
                <HeroTitle>Confirm email</HeroTitle>
                <HeroSubtitle>
                    Your sign up action suceeded. Please visit your email inbox to confirm account registration.
                </HeroSubtitle>
            </Hero>
        </Container>
    );
};
