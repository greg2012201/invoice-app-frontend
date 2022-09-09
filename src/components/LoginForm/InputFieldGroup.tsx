import React, { FC, useState } from 'react';
import {
    Box,
    TextField,
    BaseTextFieldProps,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel,
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
interface Props {
    mode: Mode;
}
const InputFieldGroup: FC<Props> = ({ mode }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleTogglePassword = (): void => {
        /* eslint-disable-next-line */
        setShowPassword(prevState => !prevState);
    };
    return (
        <Box sx={Wrapper}>
            {mode === 'register' && (
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    {...SharedTextInputProps}
                />
            )}
            <TextField
                id="email"
                name="email"
                label="Email"
                {...SharedTextInputProps}
            />
            <FormControl fullWidth variant="outlined">
                <InputLabel
                    id="password"
                    variant="outlined"
                    htmlFor="password"
                    size="small"
                >
                    Password
                </InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="password"
                    size="small"
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
                />
            </FormControl>
        </Box>
    );
};

export default InputFieldGroup;
