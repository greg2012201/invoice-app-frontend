export type Contractor = {
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
export type Contractors = {
    seller: Contractor;
    buyer: Contractor;
};
