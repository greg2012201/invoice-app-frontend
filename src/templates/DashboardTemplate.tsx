import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Wrapper } from './DashboardTemplate.styles';

const DashboardTemplate: FC = () => {
    return (
        <Wrapper>
            <Typography variant="h2" component="h1">
                Invoice App
            </Typography>
        </Wrapper>
    );
};

export default DashboardTemplate;
