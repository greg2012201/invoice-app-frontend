import React, { FC } from 'react';
import { Typography, Divider, Box } from '@mui/material';
import IssueInvoiceForm from 'components/IssueInvoiceForm';

const IssueInvoice: FC = () => {
    return (
        <div>
            <Box>
                <Typography variant="h2">Issue invoice</Typography>
                <Typography variant="subtitle2">
                    Provide information to issue new invoice
                </Typography>
            </Box>
            <Divider />
            <IssueInvoiceForm />
        </div>
    );
};

export default IssueInvoice;
