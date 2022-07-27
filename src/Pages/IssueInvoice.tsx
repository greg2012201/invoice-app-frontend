import React, { FC } from 'react';
import { Typography, Divider } from '@mui/material';
import IssueInvoiceForm from 'components/IssueInvoiceForm';

const IssueInvoice: FC = () => {
    return (
        <div>
            <Typography variant="h2">Issue invoice</Typography>
            <Typography variant="subtitle2">
                Provide information to issue new invoice
            </Typography>
            <Divider />
            <IssueInvoiceForm />
        </div>
    );
};

export default IssueInvoice;
