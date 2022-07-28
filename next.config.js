// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "randomuser.me"],
    hostname: ["fakestoreapi.com", "randomuser.me"],
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

// module.exports = nextConfig;
