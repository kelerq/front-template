import { ChangeEvent, useState } from 'react';

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export function useForm(initialValues: { [key: string]: string }) {
    const [values, setValues] = useState<{ [key: string]: string }>(initialValues);

    const handleChange = (e: InputChangeEvent) => {
        if (e && e.target) {
            setValues({ ...values, [e.target.name]: e.target.value });
        }
        console.log(values, 'values');
    };

    return [values, handleChange] as const;
}
