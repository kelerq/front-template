import { SignupRequest } from 'core/domainModels/authorization/signupRequest';
import { z } from 'zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormSection, FormSectionHeader } from 'shared-ui/atoms/FormSection';
import { signupThunk } from 'shared-state/global/authorization/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType } from 'shared-state/configureStore';
import { useNavigate } from 'react-router-dom';
import { ApplicationState } from 'shared-state/applicationState';
import Button from 'shared-ui/atoms/Button';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import TextInput from 'shared-ui/molecules/TextInput';

export const SignupFormContainer: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<DispatchType>();
    const signupPending = useSelector((state: ApplicationState) => state.authorization.signupPending);

    const signup = form => dispatch(signupThunk(form)).then(() => navigate('/im/auth/signup/success'));
    const submit: SubmitHandler<SignupRequest> = (data: SignupRequest) => {
        signup(data);
    };

    const FormSchema = z
        .object({
            email: z.string().email(),
            plainPassword: z.string().min(8),
            repeatPlainPassword: z.string().min(8),
            firstName: z.string().min(2),
            lastName: z.string().min(2),
        })
        .superRefine(({ plainPassword, repeatPlainPassword }, ctx) => {
            if (repeatPlainPassword !== plainPassword) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['repeatPlainPassword'],
                    message: 'The passwords did not match',
                });
            }
        });

    type FormSchemaType = z.infer<typeof FormSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });

    return (
        <Container className="text-center">
            <Col className="items-center">
                <FormSection onSubmit={handleSubmit(submit)} className="w-3/6">
                    <FormSectionHeader className="pb-2 mt-4 mb-4 border-b border-gray">Sign up</FormSectionHeader>
                    <TextInput
                        placeholder="Enter email address..."
                        label="Email"
                        register={register('email')}
                        error={errors.email ? errors.email.message : undefined}
                    />
                    <TextInput
                        placeholder="Enter password..."
                        label="Password"
                        password
                        register={register('plainPassword')}
                        error={errors.plainPassword ? errors.plainPassword.message : undefined}
                    />
                    <TextInput
                        placeholder="Repeat password..."
                        label="Repeat password"
                        password
                        register={register('repeatPlainPassword')}
                        error={errors.repeatPlainPassword ? errors.repeatPlainPassword.message : undefined}
                    />

                    <TextInput
                        placeholder="Enter first name..."
                        label="First name"
                        register={register('firstName')}
                        error={errors.firstName ? errors.firstName.message : undefined}
                    />
                    <TextInput
                        placeholder="Enter last name..."
                        label="Last name"
                        register={register('lastName')}
                        error={errors.lastName ? errors.lastName.message : undefined}
                    />
                    <Button size="medium" fullWidth className="mt-4" loading={signupPending}>
                        Sign up
                    </Button>
                </FormSection>
            </Col>
        </Container>
    );
};
