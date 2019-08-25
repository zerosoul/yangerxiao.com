import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = props => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        avator: file(relativePath: { eq: "avator.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <Img
          className="logo"
          fluid={data.avator.childImageSharp.fluid}
          alt="logo"
        />
        <div className="content">
          <div className="inner">
            <h1>杨二</h1>
            <span className="slogan">Machine repeats</span>
            <br />
            <span className="slogan">Human creates</span>
            <div className="social">
              <a
                target="_blank"
                href="//github.com/zerosoul"
                className="ico fa fa-github"
              />
              <a
                target="_blank"
                href="//weibo.com/yanggc2014"
                className="ico fa fa-weibo"
              />
              {/* <a target="_blank" href="//www.douban.com/people/yanggc/" className="ico fa fa-douban" /> */}
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  props.onOpenArticle('about')
                }}
              >
                关于我
              </button>
            </li>
            <li>
              <a target="_blank" href="//blog.yangerxiao.com">
                博客
              </a>
            </li>
            <li>
              <a target="_blank" href="/works">
                作品
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )}
  />
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
