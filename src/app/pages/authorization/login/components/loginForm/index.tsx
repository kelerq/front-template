import { Button } from 'app/components/Button';
import { Col } from 'app/components/Col';
import { Container } from 'app/components/Container';
import { FormSection, FormSectionHeader } from 'app/components/FormSection';
import { TextInput } from 'app/components/inputs/TextInput';
import React, { useState } from 'react';

interface LoginFormProps {
    pending: boolean;
    loginError: string;
    onSubmit: (username: string, password: string) => void;
}

export function LoginForm(props: LoginFormProps): JSX.Element {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container className="text-center">
            <Col className="items-center">
                <FormSection className="w-1/3">
                    <FormSectionHeader className="mt-4 mb-4 border-b border-gray pb-2">Zaloguj się</FormSectionHeader>
                    <TextInput
                        value={email}
                        onChange={value => setEmail(value)}
                        containerClassName="border-t border-gray pt-2"
                        label="Email"
                    />
                    <TextInput value={password} onChange={value => setPassword(value)} password label="Password" />
                    <Button onClick={() => props.onSubmit(email, password)} size="medium" fullWidth className="mt-4">
                        Log in
                    </Button>
                </FormSection>
            </Col>
        </Container>
    );
}
