import React from 'react'
import Helmet from 'react-helmet'
import works from '../assets/works.json'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import Footer from '../components/Footer'
import Comment from '../components/Gitalk'
import HomeLink from '../components/HomeLink'
import QRCode from 'qrcode.react'
import MF from '../images/mobile.first.png'
import Eye from '../images/eye.png'
import GH from '../images/github.png'
const gradientBG = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
const GlobalStyle = createGlobalStyle`
  body{
    color:#fff;
    background: linear-gradient(-45deg, #ee7752, #9c8189, #545d6c, #23d5ab);
    background-size: 400% 400%;
    animation: ${gradientBG} 15s ease infinite;
    a{
      color:#fff;
    }
  }
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  margin: 1rem auto;
  > hgroup {
    text-align: center;
    margin-bottom: 1rem;
    h1 {
      font-size: 2rem;
      text-shadow: 2px 7px 12px black;
    }
    h2 {
      font-size: 0.8rem;
      color: #eee;
      position: relative;
      text-transform: uppercase;
      .count {
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        top: -0.6rem;
        right: -1.2rem;
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
    > i {
      width: 18rem;
      margin-right: 0.5rem;
    }
    .work {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-between;
      background: #333;
      padding: 0.6rem 0.8rem;
      margin-bottom: 3rem;
      margin-right: 0.5rem;
      height: 16rem;
      overflow-wrap: break-word;
      box-shadow: 0 0 6px 0px #0c0c0c;
      border-radius: 0.5rem;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 18rem;
      transition: background-image 3s;

      .mobile {
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 2.2rem;
        height: 2.2rem;
        z-index: 3;
        background: #d8c30c;
        border-radius: 50%;
        box-shadow: 0 0 5px #886e45;
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
      .intro {
        z-index: 2;

        h2 {
          font-size: 1.6rem;
          text-shadow: 1px 5px 5px black;
          white-space: nowrap;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            display: none;
          }
        }
        h3 {
          font-size: 0.8rem;
          overflow-y: scroll;
          &::-webkit-scrollbar {
            display: none;
          }
          height: 8rem;
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
          border-radius: 0.4rem;
          margin-right: 0.6rem;
          font-size: 0.7rem;
          background: rgba(0, 0, 0, 0.6);
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
const Works = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>我的作品 - Just for fun</title>
        <meta
          name="description"
          content={`我的作品集，just for fun. 以前做过的东西，可以公开的作品集合`}
        />
      </Helmet>
      <HomeLink />
      <Wrapper>
        <hgroup>
          <h1>作品集</h1>
          <h2>
            Just for fun<p className="count">{works.length}</p>
          </h2>
        </hgroup>
        <section className="works">
          {works.map(work => {
            return (
              <article
                className={`work`}
                key={work.name}
                style={{
                  backgroundImage: `url('https://gitee.com/zyanggc/oss/raw/master/works/${work.cover ||
                    BgPlaceholder}')`,
                }}
              >
                <div className="mask"></div>
                {work.mobile && (
                  <div className="mobile" title="Mobile First">
                    <img className="icon" src={MF} alt="mobile first icon" />
                    <QRCode className="qr" value={work.link} />
                  </div>
                )}
                <a className="intro" href={work.link} target="_blank">
                  <h2>{work.title}</h2>
                  <h3>{work.intro}</h3>
                </a>
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
          <i />
          <i />
          <i />
        </section>
        <Comment />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Works
