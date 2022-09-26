import React, { FC, useState } from 'react';
import { useMutation, ApolloError } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardHeader,
    Typography,
    Box,
    CardContent,
    Button,
} from '@mui/material';
import { setAccessToken } from 'utils/accessToken';
import { LOGIN } from 'queries/login';
import { REGISTER } from 'queries/register';
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
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: 'all',
        defaultValues: { name: '', email: '', password: '' },
    });
    const [fetchRegister] = useMutation(REGISTER, {
        onCompleted: data => {
            setAccessToken(data?.register || '');
            navigate('/dashboard');
        },
        onError: (err: ApolloError) => {
            /* eslint-disable-next-line */
            const code: string | unknown = err.graphQLErrors[0].extensions.code;
            if (code === 'DUPLICATED_USER_NAME') {
                setError('name', { message: err.message });
            }
            if (code === 'DUPLICATED_USER_EMAIL') {
                setError('email', { message: err.message });
            }
        },
    });
    const [fetchLogin] = useMutation(LOGIN, {
        onCompleted: data => {
            setAccessToken(data?.login?.accessToken);
            navigate('/dashboard');
        },
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
    const onSubmit = (data: User): void => {
        if (mode === 'register') {
            fetchRegister({ variables: data });
        }
        if (mode === 'login') {
            fetchLogin({ variables: data });
        }
    };

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
