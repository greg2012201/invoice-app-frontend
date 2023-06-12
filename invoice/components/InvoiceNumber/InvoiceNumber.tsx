import type { Invoice } from '@/invoice/types/invoice';
import { Typography } from '@mui/material';
import React from 'react';
import { Wrapper } from './InvoiceNumber.styles';

type Props = {
    invoiceNumber: Invoice['invoiceNumber'];
};

function InvoiceNumber({ invoiceNumber }: Props): JSX.Element {
    return (
        <Typography sx={Wrapper}>Invoice number: {invoiceNumber}</Typography>
    );
}
export default InvoiceNumber;
