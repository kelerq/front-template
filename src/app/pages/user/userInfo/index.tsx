import React from 'react';
import { Card, CardHeader, CardBody, Container, Heading, FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';
import { ApplicationState } from 'state/applicationState';
import { useSelector } from 'react-redux';
import { LoadingOverlay } from 'app/components/LoadingOverlay';

export function UserInfoContainer(): JSX.Element {
    const user = useSelector((state: ApplicationState) => state.authorization.user);

    return (
        <>
            {/* {user ? (
                <Container>
                    <Card variant="outline">
                        <CardHeader>
                            <Heading size="md">Moje konto</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>Imię</FormLabel>
                                    <Input type="text" value={user?.firstName} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Nazwisko</FormLabel>
                                    <Input type="text" value={user?.lastName} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" value={user?.email} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Hasło</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Button type="submit">Zapisz</Button>
                                </Stack>
                            </Stack>
                        </CardBody>
                    </Card>
                </Container>
            ) : (
                <LoadingOverlay pending />
            )} */}
        </>
    );
}
