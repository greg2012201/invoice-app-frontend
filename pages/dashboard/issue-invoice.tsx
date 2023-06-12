import React from 'react';
import InvoiceNumber from '@/invoice/components/InvoiceNumber';
import dynamic from 'next/dynamic';
import { Typography, Divider, Box } from '@mui/material';
import Contractors from '@/contractor/components/Contractors';
import Service from '@/invoice/components/Service';
import { withApolloClient } from '@/utils/getApolloClient';
import { GET_INVOICE_NUMBER } from '@/invoice/queries/getInvoiceNumber';
import type { Invoice } from '@/invoice/types/invoice';

const IssueInvoiceForm = dynamic(
    () => import('@/shared/components/IssueInvoiceForm'),
    {
        ssr: false,
    }
);

type PageProps = { invoiceNumber: Invoice['invoiceNumber'] };

export const getServerSideProps = withApolloClient<PageProps>(
    async (_, apolloClient) => {
        const res = await apolloClient.query({
            query: GET_INVOICE_NUMBER,
        });
        return {
            invoiceNumber: res.data.getInvoiceNumber ?? null,
        };
    }
);

function IssueInvoice({ invoiceNumber }: PageProps): JSX.Element {
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
                invoiceNumber={<InvoiceNumber invoiceNumber={invoiceNumber} />}
                contractors={<Contractors />}
                service={<Service />}
            />
        </div>
    );
}

export default IssueInvoice;
