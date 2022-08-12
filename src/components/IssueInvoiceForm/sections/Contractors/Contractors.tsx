import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Wrapper } from './Contractors.styles';
import ContractorCard from './ContractorCard';

const Contractors: FC = () => {
    return (
        <Box sx={Wrapper}>
            <ContractorCard />
        </Box>
    );
};

export default Contractors;
