import styled from 'styled-components';
import { indigo } from '@mui/material/colors';

export const Footer = {
    paddingLeft: '18px',
    color: 'text.secondary',
};
export const FooterMessage = {
    fontStyle: 'italic',
};
export const TextButton = styled.button`
    padding: 0 3px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${indigo[700]};

    &:hover {
        text-decoration: underline;
    }
`;
export const ButtonWrapper = {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '16px 0',
};
