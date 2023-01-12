import { Container } from 'app/components/Container';
import { Hero, HeroTitle, HeroSubtitle } from 'app/components/Hero';
import React from 'react';

export const SignupInfo = () => {
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
