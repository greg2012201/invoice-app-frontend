import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Card,
    CardHeader,
    Typography,
    Box,
    CardContent,
    Button,
} from '@mui/material';
import {
    Footer,
    FooterMessage,
    TextButton,
    ButtonWrapper,
} from './LoginForm.styles';
import InputFieldGroup from './InputFieldGroup';
import { Mode } from './types';

interface User {
    name?: string;
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        defaultValues: { name: '', email: '', password: '' },
    });
    const defaultMode = 'login';
    const [mode, setMode] = useState<Mode>(defaultMode);
    const handleChangeMode = (): void => {
        /* eslint-disable-next-line */
        setMode(prevState => {
            return prevState === defaultMode ? 'register' : defaultMode;
        });
    };
    /* eslint-disable-next-line */
    const onSubmit = (data: User): void => console.log(data);
    return (
        <Card>
            <CardHeader
                title="Welcome 👋"
                subheader="Please log in to get access to the app."
            />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputFieldGroup
                        register={register}
                        errors={errors}
                        mode={mode}
                    />
                    <Box sx={ButtonWrapper}>
                        <Button type="submit" size="small" variant="contained">
                            {mode === 'register' ? 'Sign up' : 'Sign in'} ✔️
                        </Button>
                    </Box>
                </form>
            </CardContent>
            <Box sx={Footer}>
                <Typography sx={FooterMessage}>
                    Would you like to{' '}
                    <TextButton onClick={handleChangeMode} type="button">
                        <Typography sx={FooterMessage}>
                            {mode === 'login' ? 'create new account' : 'log in'}
                        </Typography>
                    </TextButton>
                    ?
                </Typography>
            </Box>
        </Card>
    );
};

export default LoginForm;
