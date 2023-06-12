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
import { Contractor } from '@/contractor/types/contractors';
import {
    ContractorTypeParagraph,
    ListItemStyles,
    CardWrapperStyles,
} from './ContractorCard.styles';

interface Props extends Contractor {
    contractorType: string;
}
const sharedItemLabelProps = { color: 'text.secondary', fontStyle: 'italic' };
const ContractorCard: FC<Props> = ({
    contractorType,
    name,
    address,
    tel,
    email,
}) => {
    return (
        <Card variant="outlined" sx={CardWrapperStyles}>
            <CardContent>
                <Typography
                    sx={ContractorTypeParagraph}
                    {...sharedItemLabelProps}
                >
                    {contractorType}
                </Typography>
                <Typography variant="h5" component="p">
                    {name}
                </Typography>
                <List>
                    <ListItem sx={ListItemStyles}>
                        <Typography {...sharedItemLabelProps}>
                            Address:
                        </Typography>
                        <Typography>
                            {address.street} {address.number}, <br />
                            {address.postalCode} {address.city},{' '}
                            {address.country}
                        </Typography>
                    </ListItem>
                    {tel && (
                        <ListItem sx={ListItemStyles}>
                            <Typography {...sharedItemLabelProps}>
                                Tel:
                            </Typography>
                            <Typography>{tel}</Typography>
                        </ListItem>
                    )}
                    {email && (
                        <ListItem sx={ListItemStyles}>
                            <Typography {...sharedItemLabelProps}>
                                Email:
                            </Typography>
                            <Typography>{email}</Typography>
                        </ListItem>
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
