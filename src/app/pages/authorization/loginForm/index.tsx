import React, { useEffect, useState } from 'react';

interface LoginFormProps {
    pending: boolean;
    loginError: string;
    onSubmitLogin: (username: string, password: string) => void;
}

export function LoginForm(props: LoginFormProps): JSX.Element {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <>
            <div>Login form!</div>
        </>
    );
}
