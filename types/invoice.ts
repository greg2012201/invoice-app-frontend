export type Invoice = {
    serviceName: string;
    quantity: number;
    priceNet: number;
    valueNet: number;
    VATRate: string;
    sumVAT: number;
    grossValue: number;
    comments?: string;
    invoiceNumber: string;
    shortInvoiceNumber: number;
    issuedAt?: Date;
};
