import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import type { ReadOnlyMap } from '@/shared/types/shared';

type Option = ReadOnlyMap<{
    id: string;
    value: string;
    label: string;
}>;

type Props = {
    id: string;
    label: string;
    options: Option[];
};

function SelectField({ id, label, options }: ReadOnlyMap<Props>): JSX.Element {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent): void => {
        setSelectedValue(event.target.value);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id={id}>Age</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={selectedValue}
                label={label}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {options.map(option => {
                    return (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    );
                })}
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
    );
}

export default SelectField;
