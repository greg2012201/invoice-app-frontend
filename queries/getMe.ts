import { gql } from '@apollo/client';

export const GET_ME_STRING = `
query GetMe {
    getMe {
        id
        name
        email
    }
}
`;

export const GET_ME = gql`
    ${GET_ME_STRING}
`;
