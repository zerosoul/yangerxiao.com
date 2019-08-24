import React from 'react'
import Helmet from 'react-helmet'

const Works = ({ title: siteTitle, description: siteDescription }) => {
  return (
    <>
      <Helmet>
        <title>我的作品</title>
        <meta name="description" content={`个人作品集合`} />
      </Helmet>
      hello works
    </>
  )
}

export default Works

// export const pageQuery = graphql`
//   query PageQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
