import React, { FC } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Box, Typography, Button, Toolbar } from '@mui/material';
import { InvoiceNumber, Form, ToolbarStyles } from './IssueInvoiceForm.styles';
import Contractors from './sections/Contractors/Contractors';
import Service from './sections/Service';

const IssueInvoiceForm: FC = () => {
    const methods = useForm();
    /* TODO: define types for data */
    const onSubmit = data => console.log(data);
    return (
        <FormProvider {...methods}>
            <Box
                component="form"
                onSubmit={methods.handleSubmit(onSubmit)}
                sx={Form}
                noValidate
                autoComplete="off"
            >
                <Typography sx={InvoiceNumber}>
                    Invoice Number: FV/01/01/2022
                </Typography>
                <Contractors />
                <Service />
                <Toolbar disableGutters sx={ToolbarStyles}>
                    <Button type="submit" variant="contained" size="large">
                        Submit
                    </Button>
                </Toolbar>
            </Box>
        </FormProvider>
    );
};

export default IssueInvoiceForm;
