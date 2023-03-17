import React from 'react';
import { ApplicationState } from 'shared-state/applicationState';
import { useDispatch, useSelector } from 'react-redux';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { DispatchType } from 'shared-state/configureStore';
import { User } from 'core/domainModels/users/user';
import { updateUserThunk } from 'shared-state/global/users/reducer';
import Button from 'shared-ui/atoms/Button';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import { FormSection } from 'shared-ui/atoms/FormSection';
import TextInput from 'shared-ui/molecules/TextInput';

const FormSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
});

type FormSchemaType = z.infer<typeof FormSchema>;

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
