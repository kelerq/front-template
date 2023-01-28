import React from 'react';
import { ApplicationState } from 'state/applicationState';
import { useDispatch, useSelector } from 'react-redux';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'app/components/Button';
import { Col } from 'app/components/Col';
import { Container } from 'app/components/Container';
import { FormSection, FormSectionHeader } from 'app/components/FormSection';
import { TextInput } from 'app/components/inputs/TextInput';
import { DispatchType } from 'state/configureStore';
import { User } from 'core/domainModels/users/user';
import { updateUserThunk } from 'state/global/users/reducer';

export function AccountContainer(): JSX.Element {
    const user = useSelector((state: ApplicationState) => state.users.authenticatedUser);
    const dispatch = useDispatch<DispatchType>();

    const submit: SubmitHandler<Partial<User>> = (changes: Partial<User>) => {
        if (!user) return;
        dispatch(
            updateUserThunk({
                userId: user.id,
                changes: changes,
            }),
        );
    };

    const FormSchema = z.object({
        email: z.string().email(),
        firstName: z.string().min(2),
        lastName: z.string().min(2),
    });

    type FormSchemaType = z.infer<typeof FormSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: user?.email,
            firstName: user?.firstName,
            lastName: user?.lastName,
        },
    });

    return (
        <Container className="h-full text-center">
            <Col className="items-center">
                <FormSection onSubmit={handleSubmit(submit)} className="w-3/6">
                    <TextInput
                        placeholder="Enter email address..."
                        label="Email"
                        register={register('email')}
                        error={errors.email ? errors.email.message : undefined}
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
                    <Button size="medium" fullWidth className="mt-4">
                        Save
                    </Button>
                </FormSection>
            </Col>
        </Container>
    );
}
