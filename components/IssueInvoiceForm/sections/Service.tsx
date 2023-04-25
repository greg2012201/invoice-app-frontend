import React, { FC } from 'react';
import { Box, TextField, Grid, BaseTextFieldProps } from '@mui/material';
import { TextFieldStyle, Wrapper } from './Service.styles';

const SharedTextInputProps: BaseTextFieldProps = {
    size: 'small',
    variant: 'outlined',
    fullWidth: true,
};
const Service: FC = () => {
    return (
        <Box component="form" sx={Wrapper}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={8} lg={3.5}>
                    <TextField
                        style={TextFieldStyle}
                        id="service-name"
                        name="service-name"
                        label="Service Name"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={2} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="price-net"
                        name="price-net"
                        label="Price net"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="value-net"
                        name="value-net"
                        label="Value net"
                        variant="outlined"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="vat-rate"
                        name="vat-rate"
                        label="VAT rate"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="sum-vat"
                        name="sum-vat"
                        label="Sum VAT"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        type="number"
                        id="gross-value"
                        name="gross-value"
                        label="Gross value"
                        {...SharedTextInputProps}
                    />
                </Grid>
                <Grid item xs={8} md={8} lg={3.5}>
                    <TextField
                        id="comments"
                        name="comments"
                        label="Comments"
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
