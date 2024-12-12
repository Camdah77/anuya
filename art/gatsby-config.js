/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Art by Anuya`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/src/posts`,
        },
      },
      `gatsby-plugin-mdx`,
    `@mdx-js/react`, // Optional if you're using MDX components in React
  ],
};