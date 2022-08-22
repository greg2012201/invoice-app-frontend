import React, { FC } from 'react';
import {
    Card,
    Typography,
    CardContent,
    Button,
    CardActions,
    List,
    ListItem,
} from '@mui/material';
import { Contractor } from 'types/contractors';
import {
    ContractorTypeParagraph,
    ListItemStyles,
    CardWrapperStyles,
} from './ContractorCard.styles';

interface Props extends Contractor {
    contractorType: string;
}

const ContractorCard: FC<Props> = ({ contractorType, name, address }) => {
    return (
        <Card variant="outlined" sx={CardWrapperStyles}>
            <CardContent>
                <Typography color="text.secondary" sx={ContractorTypeParagraph}>
                    {contractorType}
                </Typography>
                <Typography variant="h5" component="p">
                    {name}
                </Typography>
                <List>
                    <ListItem sx={ListItemStyles}>
                        <Typography color="text.secondary">Address:</Typography>
                        <Typography>
                            {address.street} {address.number}, <br />
                            {address.postalCode} {address.city},{' '}
                            {address.country}
                        </Typography>
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <Button type="button">edit</Button>
            </CardActions>
        </Card>
    );
};

export default ContractorCard;
