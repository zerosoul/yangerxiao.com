import React from 'react'
import Helmet from 'react-helmet'
import works from '../assets/works.json'
import styled, { createGlobalStyle } from 'styled-components'
import Bg from '../images/bg-works.jpg'

const GlobalStyle = createGlobalStyle`
  body{
    background-image:url(${Bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 1rem auto;
  > hgroup {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
      color: #fff;
      text-shadow: 2px 7px 12px black;
    }
    h2 {
      font-size: 0.8rem;
      color: #666;
    }
  }
  .works {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .work {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      background: #333;
      padding: 0.6rem 0.8rem;
      margin-bottom: 1.4rem;
      height: 16rem;
      overflow-wrap: break-word;
      width: 16rem;
      box-shadow: 0 0 6px 0px #0c0c0c;
      border-radius: 0.5rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      > hgroup {
        z-index: 2;

        h2 {
          font-size: 1.6rem;
          text-shadow: 1px 5px 5px black;
        }
        h3 {
          font-size: 0.7rem;
          color: #ddd;
          text-transform: initial;
          text-shadow: 0 0 8px black;
        }
      }
      .links {
        display: flex;
        z-index: 1;
        align-self: flex-start;
        .link {
          text-decoration: none;
          padding: 0.2rem 0.6rem;
          border: 1px dotted #666;
          border-radius: 0.4rem;
          margin-right: 0.8rem;
          font-size: 0.7rem;
          background: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
`
const BgPlaceholder = 'placeholder.jpg'
const Works = ({ title: siteTitle, description: siteDescription }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>我的作品</title>
        <meta name="description" content={`个人作品集合`} />
      </Helmet>
      <Wrapper>
        <hgroup>
          <h1>作品集</h1>
          <h2>works</h2>
        </hgroup>
        <section className="works">
          {works.map(work => {
            return (
              <article
                className="work"
                key={work.name}
                style={{
                  backgroundImage: `url(img/${work.cover || BgPlaceholder})`,
                }}
              >
                <div className="mask"></div>
                <hgroup>
                  <h2>{work.title}</h2>
                  <h3>{work.intro}</h3>
                </hgroup>
                <div className="links">
                  <a target="_blank" href={work.link} className="link demo">
                    链接
                  </a>
                  {work.github && (
                    <a
                      target="_blank"
                      href={work.github}
                      className="link source"
                    >
                      源码
                    </a>
                  )}
                </div>
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
