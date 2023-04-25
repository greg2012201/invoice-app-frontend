module.exports = {
    experimental: { appDir: false },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/',
                permanent: false,
            },
            {
                source: '/dashboard',
                destination: '/dashboard/issue-invoice/',
                permanent: false,
            },
        ];
    },
};
