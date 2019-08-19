import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// import aboutme from '../images/aboutme.jpg'
// import weixin from '../images/wx.jpg'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <StaticQuery
        query={
          graphql`
              {
                aboutme: file(relativePath: {eq: "aboutme.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 860) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                wx: file(relativePath: {eq: "wx.jpg"}) {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
        render={(data) =>
          (
            <div
              id="main"
              style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
            >
              {/* 关于我 */}
              <article
                id="about"
                className={`${this.props.article === 'about' ? 'active' : ''} ${
                  this.props.articleTimeout ? 'timeout' : ''
                  }`}
                style={{ display: 'none' }}
              >
                <h1 className="major">关于我</h1>
                <div className="main">
                  <Img fluid={data.aboutme.childImageSharp.fluid} alt="关于我的照片" />
                </div>
                <h2>基本信息</h2>
                <p>89年/金牛座/山东/本科/软件工程专业</p>
                <h2>技能栈</h2>
                <ul>
                  <li>语言：Javascript/HTML5/PHP</li>
                  <li>平台/框架/类库：Node.js/React/jQuery</li>
                  <li>工具：VS Code/Sublime/Chrome/Bash/git/Docker</li>
                </ul>

                <h2>人生史记</h2>
                <ul>
                  <li>有尿床史，幼儿园，不治自愈</li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/memory-about-bookstore"
                    >
                      有休学史，小学，不请自回
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/memory-about-bookstore"
                    >
                      有学霸史，中学，不攻自破
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/memory-about-bookstore"
                    >
                      有平庸史，高中，不愠不火
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/memory-about-bookstore"
                    >
                      有沉淀史，大学，不骄不躁
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/graduate-riding-part-one"
                    >
                      有骑行史，毕业，不同凡响
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/lift-part-one"
                    >
                      有搭车史，回家，不期而遇
              </a>
                  </li>
                  <li>
                    <a href="https://book.douban.com/people/yanggc/collect">
                      有阅读史，至今，不求甚解
              </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="//blog.yangerxiao.com/posts/about-running"
                    >
                      有跑步史，至今，不屈不挠
              </a>
                  </li>
                  <li>有摄影史，至今，不甚了了</li>
                  <li>
                    <a href="https://movie.douban.com/people/yanggc/collect">
                      有观影史，至今，不胜枚举
              </a>
                  </li>
                  <li>有闷骚史，至今，不学无术</li>
                  <li>有编码史，至今，不甘雌伏</li>
                  <li>有上进史，至今，不敢后人</li>
                </ul>

                {close}
              </article>
              {/* 联系我 */}
              <article
                id="contact"
                className={`${this.props.article === 'contact' ? 'active' : ''} ${
                  this.props.articleTimeout ? 'timeout' : ''
                  }`}
                style={{ display: 'none' }}
              >
                <h1 className="major">联系我</h1>

                <ul className="icons">
                  <li>
                    <span className="icon fa-envelope" />
                    <span>yanggc888#gmail.com</span>
                  </li>

                  <li>
                    <span className="icon with-img fa-weixin" />
                    <Img className="wx-img" fluid={data.wx.childImageSharp.fluid} alt="我的微信" />
                  </li>
                </ul>
                {close}
              </article>
            </div>)}
      />)
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Main
