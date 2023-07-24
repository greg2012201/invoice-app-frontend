import React from 'react';
import { Box, TextField, Grid, BaseTextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { isString } from '@/shared/types/shared';
import SelectField from '@/shared/components/SelectField';
import type { Option } from '@/shared/components/SelectField/SelectField';
import { TextFieldStyle, Wrapper } from './Service.styles';
import valuesHandler from './valuesHandler';

const VAT_RATE: Option[] = [
    { id: '1', label: '23%', value: 23 },
    { id: '2', label: '22%', value: 22 },
    { id: '3', label: '8%', value: 8 },
    { id: '4', label: '7%', value: 7 },
    { id: '5', label: '5%', value: 5 },
    { id: '6', label: '3%', value: 3 },
    { id: '7', label: '0%', value: 0 },
];

const SharedTextInputProps: BaseTextFieldProps = {
    size: 'small',
    variant: 'outlined',
    fullWidth: true,
};
const REQUIRED_INFO = 'This field is required';
function Service(): JSX.Element {
    const {
        register,
        control,
        formState: { errors },
        getValues,
        setValue,
    } = useFormContext();
    const handleOnBlur = (value: string, path: string): void => {
        valuesHandler({
            set: setValue,
            get: getValues,
            currentValue: {
                path,
                value: parseInt(value, 10),
            },
        });
    };
    return (
        <Box component="form" sx={Wrapper}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={8} lg={3.5}>
                    <TextField
                        style={TextFieldStyle}
                        id="service-name"
                        label="Service Name"
                        error={!!errors?.serviceName}
                        helperText={
                            isString(errors?.serviceName?.message)
                                ? errors?.serviceName?.message
                                : ''
                        }
                        {...register('serviceName', {
                            required: REQUIRED_INFO,
                        })}
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={2} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="quantity"
                        label="Quantity"
                        error={!!errors?.quantity}
                        helperText={
                            isString(errors?.quantity?.message)
                                ? errors?.quantity?.message
                                : ''
                        }
                        {...register('quantity', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                            onBlur: e => {
                                handleOnBlur(e.target.value, 'quantity');
                            },
                        })}
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="price-net"
                        label="Price net"
                        error={!!errors?.priceNet}
                        helperText={
                            isString(errors?.priceNet?.message)
                                ? errors?.priceNet?.message
                                : ''
                        }
                        {...register('priceNet', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                            onBlur: e => {
                                handleOnBlur(e.target.value, 'priceNet');
                            },
                        })}
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="value-net"
                        label="Value net"
                        error={!!errors?.valueNet}
                        helperText={
                            isString(errors?.valueNet?.message)
                                ? errors?.valueNet?.message
                                : ''
                        }
                        {...register('valueNet', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                            onBlur: e => {
                                handleOnBlur(e.target.value, 'valueNet');
                            },
                        })}
                        variant="outlined"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.2}>
                    <Controller
                        control={control}
                        name="VATRate"
                        rules={{ required: REQUIRED_INFO }}
                        render={({ field: { value, ref } }) => {
                            return (
                                <SelectField
                                    id="vat-rate"
                                    options={VAT_RATE}
                                    error={!!errors?.VATRate}
                                    value={value}
                                    onBlur={e => {
                                        handleOnBlur(e.target.value, 'VATRate');
                                        setValue(
                                            'VATRate',
                                            parseInt(e.target.value, 10)
                                        );
                                    }}
                                    style={{
                                        ...TextFieldStyle,
                                        paddingRight: '16px',
                                    }}
                                    {...SharedTextInputProps}
                                    ref={ref}
                                    helperText={
                                        isString(errors?.VATRate?.message)
                                            ? errors?.VATRate?.message
                                            : undefined
                                    }
                                    label="VAT rate"
                                    defaultValue={VAT_RATE[0].value}
                                />
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="sum-vat"
                        label="Sum VAT"
                        error={!!errors?.sumVAT}
                        helperText={
                            isString(errors?.sumVAT?.message)
                                ? errors?.sumVAT?.message
                                : ''
                        }
                        {...register('sumVAT', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                            onBlur: e => {
                                handleOnBlur(e.target.value, 'sumVat');
                            },
                        })}
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="gross-value"
                        label="Gross value"
                        error={!!errors?.grossValue}
                        helperText={
                            isString(errors?.grossValue?.message)
                                ? errors?.grossValue?.message
                                : ''
                        }
                        {...register('grossValue', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                            onBlur: e => {
                                handleOnBlur(e.target.value, 'grossValue');
                            },
                        })}
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={8} lg={3.5}>
                    <TextField
                        id="comments"
                        label="Comments"
                        {...register('comments')}
                        style={TextFieldStyle}
                        multiline
                        maxRows={4}
                        minRows={4}
                        {...SharedTextInputProps}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Service;
