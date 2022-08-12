type Contractor = {
    name: string;
    nip: string;
    address: {
        city: string;
        country: string;
        street: string;
        postalCode: string;
        number: string;
    };
    tel?: string;
    email?: string;
};
type Contractors = {
    seller: Contractor;
    buyer: Contractor;
};
export const contractors: Contractors = {
    seller: {
        name: 'Nice buyer company',
        nip: '1234',
        address: {
            city: 'Kraków',
            country: 'Poland',
            street: 'Wielicka',
            postalCode: '32-420',
            number: '12',
        },
        tel: '+48298638994',
        email: 'example@example.com',
    },
    buyer: {
        name: 'Nice seller company',
        nip: '1234',
        address: {
            city: 'Kraków',
            country: 'Poland',
            street: 'Opolska',
            postalCode: '32-420',
            number: '880',
        },
    },
};
