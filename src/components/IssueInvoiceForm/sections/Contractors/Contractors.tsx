import React, { FC } from 'react';
import { Box } from '@mui/material';
import { contractors } from 'mocks/contractors';
import { Contractor } from 'types/contractors';
import { Wrapper } from './Contractors.styles';
import ContractorCard from './ContractorCard';

const Contractors: FC = () => {
    return (
        <Box sx={Wrapper}>
            {Object.entries(contractors).map(
                ([key, value]: [key: string, value: Contractor]) => {
                    const contractor = value;
                    return (
                        /* eslint-disable-next-line */
                        <ContractorCard contractorType={key} {...contractor} />
                    );
                }
            )}
        </Box>
    );
};

export default Contractors;
