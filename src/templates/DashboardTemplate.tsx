import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Wrapper } from './DashboardTemplate.styles';

const DashboardTemplate: FC = () => {
    return (
        <Wrapper>
            <Typography variant="h1" component="h1">
                Invoice App
            </Typography>
            <Typography variant="subtitle1" component="h2">
                Subtitle
            </Typography>
        </Wrapper>
    );
};

export default DashboardTemplate;
