import React, { FC } from 'react';
import { Card, Typography, CardContent, Button } from '@mui/material';

const ContractorCard: FC = () => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardContent>
                <Typography>Contractor name</Typography>
                <Button>edit</Button>
            </CardContent>
        </Card>
    );
};

export default ContractorCard;
