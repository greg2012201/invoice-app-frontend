import React, { FC } from 'react';
import { Box, TextField, Grid, Input } from '@mui/material';
import { TextFieldStyle } from './Service.styles';

const Service: FC = () => {
    return (
        <Box
            component="form"
            sx={{ flexGrow: 1, flexWrap: 'wrap', maxWidth: '900px' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={8} md={8} lg={5}>
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
                <Grid item xs={8} md={4} lg={2.5}>
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
                <Grid item xs={8} md={4} lg={2.5}>
                    <TextField
                        style={TextFieldStyle}
                        fullWidth
                        type="number"
                        id="price-net"
                        name="price-gross"
                        label="Price gross"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Service;
