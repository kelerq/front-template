import { SignupRequest } from 'core/domainModels/authorization/signupRequest';
import React from 'react';
import { signupThunk } from 'shared-state/global/authorization/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ApplicationState } from 'shared-state/applicationState';
import Button from 'shared-ui/atoms/Button';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import TextInput from 'shared-ui/molecules/TextInput';
import FormControl from 'shared-ui/atoms/Form/FormControl';
import FormField from 'shared-ui/atoms/Form/FormField';
import FormLabel from 'shared-ui/atoms/Form/FormLabel';
import FormMessage from 'shared-ui/atoms/Form/FormMessage';
import FormRoot from 'shared-ui/atoms/Form/FormRoot';
import FormSubmit from 'shared-ui/atoms/Form/FormSubmit';
import { Link } from 'react-router-dom';
import { PatternTypes } from 'core/helpers/patternTypes';
import InputCheckbox from 'shared-ui/atoms/InputCheckbox';
import { useReducer } from 'react';
import { DispatchType } from 'shared-state/configureStore';

export const SignupFormContainer: React.FC = () => {
    const initialState = {
        policyChecked: false,
        newsletterChecked: false,
        email: '',
        password: '',
        repeatpassword: '',
        firstname: '',
        surname: '',
        lastName: '',
    };
    function formReducer(state, action) {
        switch (action.type) {
            case 'SET_FIELD':
                return { ...state, [action.field]: action.value };
            default:
                return state;
        }
    }

    const [state, changeState] = useReducer(formReducer, initialState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        changeState({ type: 'SET_FIELD', field: name, value: value });
    };

    const navigate = useNavigate();
    const signupPending = useSelector((state: ApplicationState) => state.authorization.signupPending);

    const dispatch = useDispatch<DispatchType>();

    const signup = form => dispatch(signupThunk(form)).then(() => navigate('/im/auth/signup/success'));

    const handleSubmit = (data: SignupRequest) => {
        const { password, repeatpassword } = state;
        if (password !== repeatpassword) {
            alert('Hasła nie są takie same');
            return;
        }
        signup(data);
    };

    return (
        <Container className="flex flex-row justify-center">
            <Col className=" sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3 className="mt-4 text-4xl text-black ">Rejestracja</h3>
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
                                name="email"
                                value={state.email}
                                onChange={handleInputChange}
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
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="patternMismatch">
                                Wprowadź poprawne hasło (hasło powinno zawierać conajmniej 8 liter)
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                name="password"
                                value={state.password}
                                onChange={handleInputChange}
                                dimensions="large"
                                className="text-lg"
                                required
                                password={true}
                                pattern={PatternTypes.PasswordRegex}
                            />
                        </FormControl>
                    </FormField>
                    <FormField name="repeatpassword" className="my-2">
                        <div className="flex flex-row items-center justify-between">
                            <FormLabel className="my-1 text-sm font-light text-base-400">Powtórz hasło</FormLabel>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="valueMissing">
                                Wprowadź ponownie hasło
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                name="repeatpassword"
                                value={state.password}
                                onChange={handleInputChange}
                                dimensions="large"
                                className="text-lg"
                                required
                                password={true}
                            />
                        </FormControl>
                    </FormField>
                    <FormField className="my-2" name="firstName">
                        <div className="flex flex-row items-center justify-between">
                            <FormLabel className="my-1 text-sm font-light text-base-400">Imię</FormLabel>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="valueMissing">
                                Wprowadź imię
                            </FormMessage>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="patternMismatch">
                                Wprowadź poprawne imię
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                name="firstname"
                                value={state.firstname}
                                onChange={e => handleInputChange(e)}
                                dimensions="large"
                                className="text-2xl"
                                required
                                pattern={PatternTypes.NameRegex}
                            />
                        </FormControl>
                    </FormField>
                    <FormField className="my-2" name="lastName">
                        <div className="flex items-baseline justify-between">
                            <FormLabel className="my-1 text-sm font-light text-base-400">Nazwisko</FormLabel>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="valueMissing">
                                Wprowadź nazwisko
                            </FormMessage>
                            <FormMessage className="text-xs text-error opacity-[0.8]" match="patternMismatch">
                                Wprowadź poprawne nazwisko
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <TextInput
                                name="lastname"
                                value={state.lastname}
                                onChange={e => handleInputChange(e)}
                                dimensions="large"
                                className="text-2xl"
                                required
                                pattern={PatternTypes.SurnameRegex}
                            />
                        </FormControl>
                    </FormField>

                    <div className="flex flex-row items-center mt-3 text-xs text-base-400">
                        <InputCheckbox variant="accent" checked={state} onChange={e => handleInputChange(e)} />
                        Przeczytałem/am i akceptuję{' '}
                        <Link className="underline" to="/">
                            Regulamin
                        </Link>{' '}
                        oraz{' '}
                        <Link className="underline" to="/">
                            Politykę Prywatności
                        </Link>{' '}
                        Spreest.
                    </div>
                    <div className="flex flex-row items-center mt-3 text-xs text-base-400">
                        <InputCheckbox variant="accent" checked={state} onChange={e => handleInputChange(e)} />
                        Wyrażam zgodę na otrzymywanie treści marketingowych od Spreest.
                    </div>
                    <FormSubmit asChild>
                        <Button className="mt-5" size="large" fullWidth variant="primary" loading={signupPending}>
                            Utwórz konto
                        </Button>
                    </FormSubmit>
                </FormRoot>
                <div className="text-xs text-base-400">
                    Posiadasz już konto?{' '}
                    <Link className="text-xs text-primary-focus" to="/im/auth/login">
                        Zaloguj się
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
};
