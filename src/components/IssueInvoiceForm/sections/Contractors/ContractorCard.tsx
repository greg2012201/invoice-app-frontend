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
} from './ContractorCard.styles';

interface Props extends Contractor {
    contractorType: string;
}
type AddressItemLabel = {
    label: string;
    value: string;
};
const addressItemLabels: AddressItemLabel[] = [
    { label: 'City', value: 'city' },
    { label: 'Country', value: 'country' },
    { label: 'Street', value: 'street' },
    { label: 'Postal Code', value: 'postalCode' },
    { label: 'Number', value: 'number' },
];
const ContractorCard: FC<Props> = ({ contractorType, name, address }) => {
    return (
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <CardContent>
                <Typography color="text.secondary" sx={ContractorTypeParagraph}>
                    {contractorType}
                </Typography>
                <Typography variant="h5" component="p">
                    {name}
                </Typography>
                <List>
                    {Object.entries(address).map(
                        ([key, value]: [key: string, value: string]) => {
                            const foundLabel = addressItemLabels.find(
                                (item: AddressItemLabel) => {
                                    return key === item.value;
                                }
                            )?.label;
                            return (
                                <ListItem sx={ListItemStyles}>
                                    <Typography color="text.secondary">
                                        {foundLabel}:
                                    </Typography>
                                    <Typography>{value}</Typography>
                                </ListItem>
                            );
                        }
                    )}
                </List>
            </CardContent>
            <CardActions>
                <Button type="button">edit</Button>
            </CardActions>
        </Card>
    );
};

export default ContractorCard;
