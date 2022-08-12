import React, { FC } from 'react';
import { Box, Card, Typography, CardContent, Button } from '@mui/material';

const Contractors: FC = () => {
    return (
        <Box>
            <Card sx={{ maxWidth: 300 }}>
                <CardContent>
                    <Typography>Contractor name</Typography>
                    <Button>edit</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Contractors;
