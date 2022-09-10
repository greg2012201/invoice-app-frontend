import React, { FC, useState } from 'react';
import { FieldValues, UseFormRegister, FieldErrorsImpl } from 'react-hook-form';

import {
    Box,
    TextField,
    BaseTextFieldProps,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Wrapper } from './InputFieldGroup.styles';
import { Mode } from './types';

const SharedTextInputProps: BaseTextFieldProps = {
    size: 'small',
    variant: 'outlined',
    fullWidth: true,
};
interface ExtendedFieldValues extends FieldValues {
    name: string;
    email: string;
    password: string;
}
type Error = {
    type?: string;
    message?: string;
    ref?: any;
};
interface Errors {
    name?: Error;
    email?: Error;
    password?: Error;
}
interface Props {
    mode: Mode;
    register: UseFormRegister<ExtendedFieldValues>;
    errors: FieldErrorsImpl<Errors>;
}
const InputFieldGroup: FC<Props> = ({ mode, register, errors }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleTogglePassword = (): void => {
        /* eslint-disable-next-line */
        setShowPassword(prevState => !prevState);
    };
    const messageModeLabel = mode === 'login' ? 'Log in' : 'Register';
    return (
        <Box sx={Wrapper}>
            {mode === 'register' && (
                <TextField
                    id="name"
                    label="Name"
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                    {...SharedTextInputProps}
                    {...register('name', {
                        required: `Enter your name to ${messageModeLabel}`,
                    })}
                />
            )}
            <TextField
                id="email"
                label="Email"
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                {...SharedTextInputProps}
                {...register('email', {
                    required: `Enter your email to ${messageModeLabel}`,
                })}
            />
            <FormControl fullWidth variant="outlined">
                <InputLabel
                    id="password"
                    variant="outlined"
                    htmlFor="password"
                    size="small"
                    error={!!errors.password?.message}
                >
                    Password
                </InputLabel>

                <OutlinedInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    label="password"
                    size="small"
                    error={!!errors.password?.message}
                    endAdornment={
                        /* eslint-disable-next-line */
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePassword}
                                onMouseDown={handleTogglePassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOffIcon />
                                ) : (
                                    <VisibilityIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    {...register('password', {
                        required: `Password is required to ${messageModeLabel}`,
                    })}
                />
                {errors?.password?.message && (
                    <FormHelperText error={!!errors.password?.message}>
                        {errors?.password?.message}
                    </FormHelperText>
                )}
            </FormControl>
        </Box>
    );
};

export default InputFieldGroup;
