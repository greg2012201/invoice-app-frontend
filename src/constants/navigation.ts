interface Sections {
    name: string;
    path: string;
}

export const SECTIONS: Array<Sections> = [
    { name: 'Issue Invoice', path: '/issue-invoice' },
    { name: 'Incoming Invoice', path: '/incoming-invoice' },
    { name: 'Issued Invoices List', path: '/issue-invoice-list' },
    { name: 'Settings', path: '/settings' },
];

export const DRAWER_WIDTH = 240;
