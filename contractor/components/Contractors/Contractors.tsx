import React, { FC } from 'react';
import { Box } from '@mui/material';
import { contractors } from '@/contractor/mocks/contractors';
import { Contractor } from '@/contractor/types/contractors';
import { Wrapper } from './Contractors.styles';
import ContractorCard from './ContractorCard';

const Contractors: FC = () => {
    return (
        <Box sx={Wrapper}>
            {Object.entries(contractors).map(
                ([key, value]: [key: string, value: Contractor]) => {
                    const contractor = value;
                    return (
                        <ContractorCard contractorType={key} {...contractor} />
                    );
                }
            )}
        </Box>
    );
};

export default Contractors;
