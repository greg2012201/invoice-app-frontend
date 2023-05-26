import React, { ReactElement } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, Toolbar } from '@mui/material';
import { Form, ToolbarStyles } from './IssueInvoiceForm.styles';

type Props = Record<'invoiceNumber' | 'contractors' | 'service', ReactElement>;

function IssueInvoiceForm({
    invoiceNumber,
    contractors,
    service,
}: Props): JSX.Element {
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
                {invoiceNumber}
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
