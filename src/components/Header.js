import React from 'react'
import { graphql, Link } from 'gatsby'
import avator from '../images/avator.jpg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <img className="logo" src={avator} alt="logo" />
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
          <a
            target="_blank"
            href="//twitter.com/wsygc"
            className="ico fa fa-twitter"
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
          <Link to="/works">作品</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
