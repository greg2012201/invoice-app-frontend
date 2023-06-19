import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import type { ReadOnlyMap } from '@/shared/types/shared';

type Option = ReadOnlyMap<{
    id: string;
    value: string | number;
    label: string;
}>;

type Props = {
    id: string;
    label: string;
    options: Option[];
    error: boolean;
    helperText?: string;
};

function SelectField({
    id,
    label,
    options,
    error = false,
    helperText,
    ...rest
}: ReadOnlyMap<Props>): JSX.Element {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent): void => {
        setSelectedValue(event.target.value);
    };
    return (
        <FormControl error={error} sx={{ m: 1, minWidth: 120 }} {...rest}>
            <InputLabel id={id} error={error}>
                {label}
            </InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={selectedValue}
                label={label}
                onChange={handleChange}
                error={error}
            >
                {options.map(option => {
                    return (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    );
                })}
            </Select>
            {error && helperText && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
            )}
        </FormControl>
    );
}

export default SelectField;
