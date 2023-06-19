import React, { forwardRef } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { isString, type ReadOnlyMap } from '@/shared/types/shared';

export type Option = {
    id: string;
    value: string | number;
    label: string;
};

type Props = {
    id: string;
    label: string;
    options: Option[];
    error: boolean;
    helperText?: string;
    defaultValue?: Option['value'];
};

const SelectField = forwardRef<HTMLDivElement, ReadOnlyMap<Props>>(
    (
        {
            id,
            label,
            options,
            error = false,
            helperText,
            defaultValue,
            ...rest
        }: Props,
        ref
    ): JSX.Element => {
        const [selectedValue, setSelectedValue] = React.useState(
            defaultValue ?? ''
        );

        const handleChange = (event: SelectChangeEvent): void => {
            setSelectedValue(event.target.value);
        };

        return (
            <FormControl
                error={error}
                sx={{ m: 1, minWidth: 120 }}
                ref={ref}
                {...rest}
            >
                <InputLabel id={id} error={error}>
                    {label}
                </InputLabel>
                <Select
                    labelId={`${id}-label`}
                    id={id}
                    value={
                        isString(selectedValue)
                            ? selectedValue
                            : selectedValue.toString()
                    }
                    label={label}
                    onChange={handleChange}
                    error={error}
                >
                    {options.map(option => (
                        <MenuItem key={option.id} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && helperText && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                )}
            </FormControl>
        );
    }
);

export default SelectField;
