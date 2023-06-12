import { gql } from '@apollo/client';

export const GET_INVOICE_NUMBER = gql`
    query GetInvoiceNumber {
        getInvoiceNumber
    }
`;
