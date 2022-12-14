module.exports = {
    experimental: { appDir: true },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/',
                permanent: true,
            },
        ];
    },
};
