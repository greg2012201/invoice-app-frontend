import { Typography } from '@mui/material';
import React from 'react';
import { Wrapper } from './InvoiceNumber.styles';

function InvoiceNumber(): JSX.Element {
    return <Typography sx={Wrapper}>Invoice Number: FV/01/01/2022</Typography>;
}
export default InvoiceNumber;
