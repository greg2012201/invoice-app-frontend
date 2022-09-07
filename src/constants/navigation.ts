interface Section {
    name: string;
    path: string;
}

export const SECTIONS: Array<Section> = [
    { name: 'Issue Invoice', path: '/dashboard/issue-invoice' },
    { name: 'Incoming Invoice', path: '/dashboard/incoming-invoice' },
    { name: 'Issued Invoices List', path: '/dashboard/issue-invoice-list' },
    { name: 'Settings', path: '/dashboard/settings' },
];

export const DRAWER_WIDTH = 200;
