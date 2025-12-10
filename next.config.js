/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: ['images.ctfassets.net', 'via.placeholder.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

module.exports = withMDX(nextConfig)