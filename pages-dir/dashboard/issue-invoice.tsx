import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { Typography, Divider, Box } from '@mui/material';

const IssueInvoiceForm = dynamic(() => import('components/IssueInvoiceForm'), {
    ssr: false,
});
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
