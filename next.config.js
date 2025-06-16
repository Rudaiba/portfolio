const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

module.exports = {
    output: 'export',
    basePath: repo ? `/${repo}` : '',
    assetPrefix: repo ? `/${repo}/` : '',
    swcMinify: true,
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};