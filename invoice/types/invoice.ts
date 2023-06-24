export type Invoice = {
    serviceName: string;
    quantity: number;
    priceNet: number;
    valueNet: number;
    VATRate: number;
    sumVAT: number;
    grossValue: number;
    comments?: string;
    invoiceNumber: string;
    shortInvoiceNumber: number;
    issuedAt?: Date;
};

export type InvoiceValues = Record<
    'quantity' | 'priceNet' | 'vatRate' | 'valueNet' | 'grossValue' | 'sumVat',
    number
>;
