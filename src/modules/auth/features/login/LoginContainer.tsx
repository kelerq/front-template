import { useDispatch } from 'react-redux';
import { DispatchType } from 'shared-state/configureStore';
import { loginThunk } from 'shared-state/global/authorization/reducer';
import React, { useState } from 'react';
import { redirect } from 'react-router';
import { Container } from 'shared-ui/atoms/Container';
import { Button } from 'shared-ui/atoms/Button';
import { Col } from 'shared-ui/atoms/Col';
import { FormSection, FormSectionHeader } from 'shared-ui/atoms/FormSection';
import { TextInput } from 'shared-ui/molecules/TextInput';

export function LoginContainer(): JSX.Element {
    const dispatch = useDispatch<DispatchType>();

    const authenticate = (email: string, password: string) =>
        dispatch(loginThunk({ email: email, password: password })).then(() => redirect('/'));

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container className="text-center">
            <Col className="items-center">
                <FormSection className="w-1/3">
                    <FormSectionHeader className="pb-2 mt-4 mb-4 border-b border-gray">Zaloguj się</FormSectionHeader>
                    <TextInput
                        value={email}
                        onChange={value => setEmail(value)}
                        containerClassName="border-t border-gray pt-2"
                        label="Email"
                    />
                    <TextInput value={password} onChange={value => setPassword(value)} password label="Password" />
                    <Button onClick={() => authenticate(email, password)} size="medium" fullWidth className="mt-4">
                        Log in
                    </Button>
                </FormSection>
            </Col>
        </Container>
    );
}
