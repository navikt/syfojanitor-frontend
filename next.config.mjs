/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: ['@navikt/next-logger', 'next-logger'],
    },
};

export default nextConfig;
