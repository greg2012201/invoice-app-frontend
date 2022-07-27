import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { InvoiceNumber, Form } from './IssueInvoiceForm.styles';

const IssueInvoiceForm: FC = () => {
    return (
        <Box component="form" sx={Form} noValidate autoComplete="off">
            <Typography sx={InvoiceNumber}>
                Invoice Number: FV/01/01/2022
            </Typography>
        </Box>
    );
};

export default IssueInvoiceForm;
