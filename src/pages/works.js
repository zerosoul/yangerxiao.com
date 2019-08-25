import React from 'react'
import Helmet from 'react-helmet'
import works from '../assets/works.json'
import styled, { createGlobalStyle } from 'styled-components'

import Bg from '../images/bg-works.jpg'
import MF from '../images/mobile.first.png'
import Eye from '../images/eye.png'
import GH from '../images/github.png'

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
      position: relative;
      .count {
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        top: -0.6rem;
        right: 0.3rem;
        border-radius: 50%;
        font-size: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
      margin: 0 1rem;
      margin-bottom: 1.6rem;
      height: 16rem;
      overflow-wrap: break-word;
      box-shadow: 0 0 6px 0px #0c0c0c;
      border-radius: 0.5rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 18rem;
      .mobile {
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 2.2rem;
        height: 2.2rem;
        z-index: 3;
        background: #ccc;
        border-radius: 50%;
        .icon {
          width: 100%;
          cursor: pointer;
        }
        .qr {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          width: 8rem;
          left: 0;
          top: 0;
          background: #fff;
          padding: 0.6rem;
          border-radius: 0.5rem;
          transform: translateX(-160%);
          transition: all 0.6s;
        }
        .icon:hover + .qr {
          visibility: visible;
          opacity: 1;
          box-shadow: 8px 11px 9px 0px black;

          transform: translateX(-110%);
        }
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        border-radius: 0.5rem;
      }
      > hgroup {
        z-index: 2;

        h2 {
          font-size: 1.6rem;

          text-shadow: 1px 5px 5px black;
        }
        h3 {
          font-size: 0.8rem;

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
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.2rem 0.6rem;
          border: 1px dotted #666;
          border-radius: 0.4rem;
          margin-right: 0.6rem;
          font-size: 0.7rem;
          background: rgba(0, 0, 0, 0.5);
          > img {
            height: 0.8rem;
            margin-right: 0.3rem;
          }
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
        <meta
          name="description"
          content={`以前做过的东西，可以公开的作品集合`}
        />
      </Helmet>
      <Wrapper>
        <hgroup>
          <h1>作品集</h1>
          <h2>
            works <p className="count">{works.length}</p>
          </h2>
        </hgroup>
        <section className="works">
          {works.map(work => {
            return (
              <article
                className={`work`}
                key={work.name}
                style={{
                  backgroundImage: `url(img/${work.cover || BgPlaceholder})`,
                }}
              >
                <div className="mask"></div>
                {work.qr && (
                  <div className="mobile">
                    <img className="icon" src={MF} alt="mobile first icon" />
                    <img className="qr" src={`img/${work.qr}`} alt="QR url" />
                  </div>
                )}
                <hgroup>
                  <h2>{work.title}</h2>
                  <h3>{work.intro}</h3>
                </hgroup>
                <div className="links">
                  <a target="_blank" href={work.link} className="link demo">
                    <img src={Eye} alt="预览" />
                    链接
                  </a>
                  {work.github && (
                    <a
                      target="_blank"
                      href={work.github}
                      className="link source"
                    >
                      <img src={GH} alt="源码" />
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
