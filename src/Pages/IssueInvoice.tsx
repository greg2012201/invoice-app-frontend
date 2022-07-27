import React, { FC } from 'react';
import { Typography } from '@mui/material';

const IssueInvoice: FC = () => {
    return (
        <div>
            <Typography variant="h2">Issue invoice</Typography>
            <Typography variant="subtitle2">
                Provide information to issue new invoice
            </Typography>
        </div>
    );
};

export default IssueInvoice;
