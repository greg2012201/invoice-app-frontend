import React, { FC } from 'react';
import { Box, TextField, Grid } from '@mui/material';
import { TextFieldStyle, Wrapper } from './Service.styles';

const Service: FC = () => {
    return (
        <Box component="form" sx={Wrapper}>
            <Grid container spacing={2}>
                <Grid item xs={8} md={8} lg={3.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        id="service-name"
                        name="service-name"
                        label="Service Name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={2} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="price-net"
                        name="price-net"
                        label="Price net"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="value-net"
                        name="value-net"
                        label="Value net"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.2}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="vat-rate"
                        name="vat-rate"
                        label="VAT rate"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="sum-vat"
                        name="sum-vat"
                        label="Sum VAT"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} md={5} lg={1.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="gross-value"
                        name="gross-value"
                        label="Gross value"
                        variant="outlined"
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
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Service;
