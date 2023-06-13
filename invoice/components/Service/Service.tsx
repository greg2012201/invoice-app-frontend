import React, { FC } from 'react';
import { Box, TextField, Grid, BaseTextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { isString } from '@/shared/types/shared';
import { TextFieldStyle, Wrapper } from './Service.styles';

const SharedTextInputProps: BaseTextFieldProps = {
    size: 'small',
    variant: 'outlined',
    fullWidth: true,
};
const REQUIRED_INFO = 'This field is required';
const Service: FC = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
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
                        })}
                        variant="outlined"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="vat-rate"
                        label="VAT rate"
                        error={!!errors?.VATRate}
                        helperText={
                            isString(errors?.VATRate?.message)
                                ? errors?.VATRate?.message
                                : ''
                        }
                        {...register('VATRate', {
                            required: REQUIRED_INFO,
                            valueAsNumber: true,
                        })}
                        {...SharedTextInputProps}
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
};

export default Service;
