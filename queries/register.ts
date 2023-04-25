import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation Mutation($password: String, $email: String, $name: String) {
        register(password: $password, email: $email, name: $name)
    }
`;
