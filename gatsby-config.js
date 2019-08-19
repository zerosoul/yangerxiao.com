module.exports = {
  siteMetadata: {
    title: "杨二 - Machine repeats,Human creates.",
    author: "Tristan",
    description: "杨二的个人主页 - Machine repeats,Human creates."
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "yangerxiao",
        short_name: "Tristan",
        start_url: "/",
        background_color: "#1b1f22",
        theme_color: "#7f828d",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/pwa-icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/pwa-icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "e90c3b8210f07150ec9bc72095ecf65a",
        // 配置统计脚本插入位置，默认值为 false, 表示插入到 body 中, 为 true 时插入脚本到 head 中
        head: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}
