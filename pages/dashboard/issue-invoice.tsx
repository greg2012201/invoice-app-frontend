import React, { FC } from 'react';
import InvoiceNumber from '@/components/IssueInvoiceForm/sections/InvouceNumber';
import dynamic from 'next/dynamic';
import { Typography, Divider, Box } from '@mui/material';
import Contractors from '@/components/IssueInvoiceForm/sections/Contractors';
import Service from '@/components/IssueInvoiceForm/sections/Service';

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
            <IssueInvoiceForm
                invoiceNumber={<InvoiceNumber />}
                contractors={<Contractors />}
                service={<Service />}
            />
        </div>
    );
};

export default IssueInvoice;
