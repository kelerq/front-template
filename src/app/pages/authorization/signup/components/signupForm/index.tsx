import { Button } from 'app/components/Button';
import { Col } from 'app/components/Col';
import { Container } from 'app/components/Container';
import { FormSection, FormSectionHeader } from 'app/components/FormSection';
import { TextInput } from 'app/components/TextInput';
import { Signup } from 'core/domainModels/authorization/signup';
import { z } from 'zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface SignupFormProps {
    pending: boolean;
    loginError: string;
    onSubmit: (form: Signup) => void;
}

export function SignupForm(props: SignupFormProps): JSX.Element {
    const submit: SubmitHandler<Signup> = (data: Signup) => {
        props.onSubmit(data);
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
                    <FormSectionHeader className="mt-4 mb-4 border-b border-gray pb-2">Sign up</FormSectionHeader>
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
                    <Button size="medium" fullWidth className="mt-4" loading={props.pending}>
                        Sign up
                    </Button>
                </FormSection>
            </Col>
        </Container>
    );
}
