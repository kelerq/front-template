import { useDispatch } from 'react-redux';
import { DispatchType } from 'shared-state/configureStore';
import { loginThunk } from 'shared-state/global/authorization/reducer';
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import Button from 'shared-ui/atoms/Button';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import TextInput from 'shared-ui/molecules/TextInput';
import FormRoot from 'shared-ui/atoms/Form/FormRoot';
import FormField from 'shared-ui/atoms/Form/FormField';
import FormLabel from 'shared-ui/atoms/Form/FormLabel';
import FormMessage from 'shared-ui/atoms/Form/FormMessage';
import FormControl from 'shared-ui/atoms/Form/FormControl';
import { PatternTypes } from 'core/helpers/patternTypes';
import FormSubmit from 'shared-ui/atoms/Form/FormSubmit';
import { Link } from 'react-router-dom';
import InputToggleSwitch from 'shared-ui/atoms/InputToggleSwitch';

type LoginRequest = { email: string; password: string };

export function LoginContainer(): JSX.Element {
    const dispatch = useDispatch<DispatchType>();

    const handleSubmit = ({ email, password }: LoginRequest) => {
        dispatch(loginThunk({ email: email, password: password })).then(() => {
            redirect('/');
        });
    };

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = React.useState(false);

    return (
        <Container className="flex flex-row justify-center">
            <Col className=" sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3 className="mt-4 text-4xl text-black ">Logowanie</h3>
                <FormRoot className="flex flex-col " onSubmit={handleSubmit}>
                    <FormField name="email" className="my-2">
                        <div className="flex flex-row items-center justify-between">
                            <FormLabel className="my-1 text-sm font-light text-base-400 ">Email</FormLabel>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="valueMissing">
                                Wprowadź email
                            </FormMessage>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="patternMismatch">
                                Wprowadź poprawny email{' '}
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                dimensions="large"
                                className="text-lg"
                                required
                                pattern={PatternTypes.EmailRegex}
                            />
                        </FormControl>
                    </FormField>
                    <FormField name="password" className="my-2">
                        <div className="flex flex-row items-center justify-between">
                            <FormLabel className="my-1 text-sm font-light text-base-400">Hasło</FormLabel>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="valueMissing">
                                Wprowadź hasło
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                dimensions="large"
                                className="text-lg"
                                required
                                password={true}
                            />
                        </FormControl>
                    </FormField>
                    <Link className="mt-2 mb-2 text-xs text-right underline text-base-400" to="/">
                        Zapomniałeś hasła?
                    </Link>
                    <div className="flex flex-row items-center mt-3">
                        <InputToggleSwitch variant="accent" checked={checked} onChange={value => setChecked(value)} />
                        <p className={checked ? 'ml-2 text-xs text-base-400 ' : 'ml-2 text-xs text-base-300 '}>Zapamiętaj mnie</p>
                    </div>

                    <FormSubmit asChild>
                        <Button className="mt-5" size="large" fullWidth variant="primary">
                            Zaloguj się
                        </Button>
                    </FormSubmit>
                </FormRoot>
                <div className="text-xs text-base-400">
                    Nie masz jeszcze konta?{' '}
                    <Link className="text-xs text-primary-focus" to="/im/auth/signup">
                        Zarejestruj się
                    </Link>
                </div>
            </Col>
            <div className="hidden mt-20 ml-40 border sm:w-1/3 xl:w-1/4 lg:block">
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="m fill-accent stroke-accent"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
            </div>
        </Container>
    );
}
