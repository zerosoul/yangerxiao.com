import React from 'react'
import Helmet from 'react-helmet'
import works from '../assets/works.json'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  margin: 1rem auto;
  > hgroup {
    text-align: center;
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 0.8rem;
      color: #333;
    }
  }
  .works {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .work {
      display: flex;
      flex-direction: column;
      background: #666;
      padding: 0.6rem 0.8rem;
      margin-right: 0.6rem;
      margin-bottom: 0.8rem;
      height: 100%;
      overflow-wrap: break-word;
      width: 16rem;
    }
  }
`

const Works = ({ title: siteTitle, description: siteDescription }) => {
  return (
    <>
      <Helmet>
        <title>我的作品</title>
        <meta name="description" content={`个人作品集合`} />
      </Helmet>
      <Wrapper>
        <hgroup>
          <h1>作品集</h1>
          <h3>works</h3>
        </hgroup>
        <section className="works">
          {works.map(work => {
            return (
              <article className="work" key={work.name}>
                <hgroup>
                  <h2>{work.title}</h2>
                  <h3>{work.intro}</h3>
                </hgroup>
              </article>
            )
          })}
        </section>
      </Wrapper>
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
