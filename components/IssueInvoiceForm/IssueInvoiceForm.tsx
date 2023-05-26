import React, { FC, ReactElement } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Box, Typography, Button, Toolbar } from '@mui/material';
import { InvoiceNumber, Form, ToolbarStyles } from './IssueInvoiceForm.styles';

type Props = Record<'contractors' | 'service', ReactElement>;

function IssueInvoiceForm({ contractors, service }: Props): JSX.Element {
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
                {contractors}
                {service}
                <Toolbar disableGutters sx={ToolbarStyles}>
                    <Button type="submit" variant="contained" size="large">
                        Submit
                    </Button>
                </Toolbar>
            </Box>
        </FormProvider>
    );
}

export default IssueInvoiceForm;
