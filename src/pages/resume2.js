import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ExpTitle from '../components/resume/ExpTitle'
import WorkExp from '../components/resume/WorkExp'
import PdfBtn from '../components/resume/PdfBtn'
import Profile from '../components/resume/Profile'
import { media } from '../utils/media'

const CommonStyle = createGlobalStyle`
body{
  background:#fff
}
h1,h2,h3,h4,h5{
  color:#000;
}
p{
  color:#666;
}
h3{
  margin-bottom:0 !important;
}
h4{
  margin-top:0;
}
`
const Container = styled.div`
  padding: 1.6rem 1rem;
  margin: 1rem auto;
  border: 1px solid #999;
  max-width: 98%;
  @media ${media.tabletSmall} {
    max-width: 90%;
  }
  @media ${media.desktop} {
    max-width: 70%;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    .skill {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 0.8rem;
      margin-bottom: 0.5rem;
      border: 1px solid #eee;
      padding: 0.5rem;
      h3 {
        margin: 0.2rem 0;
        margin-bottom: 0.5rem !important;
        color: #666;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #ccc;
      }
      em,
      p {
        font-size: 0.8rem;
        margin-bottom: 0;
        margin-top: 0;
      }
      em {
        font-style: normal;
        font-weight: 800;
        color: #000;
      }
      p {
        margin-bottom: 0.2rem;
        padding-bottom: 0;
        white-space: pre;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .others {
    list-style-position: inside;
    list-style-type: square;
    padding: 0;
    margin: 0.5rem 0;
    margin-top: 0;
    li {
      color: #333;
      margin-bottom: 0.2rem;
    }
  }
  .social {
    display: flex;
    .ico {
      flex: 1;
    }
  }
`
class Resume extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const profile = {
      name: '杨国春',
      info: {
        basic: '男/89年/山东/现居北京',
        blog: 'https://yangerxiao.com',
        email: 'yanggc888@gmail.com',
        tel: '+86 18201385848',
      },
    }
    const jobs = [
      {
        company: '自由职业',
        title: '全<span class="del">栈</span>干工程师',
        period: ['2018.3', '2018.7'],
        desc:
          '个人原因离职回家处理事情，期间自己折腾做产品，使用React重构了个人网站',
        // stack: ['ES6', 'react', 'PHP', 'docker', 'git'],
        duties: [],
      },
      {
        company: '飞华健康网',
        title: '前端工程师',
        period: ['2014.5', '2018.2'],
        desc:
          '作为公司第一位专职前端，与公司共成长，从前端工程师到前端经理，公司前端部门从无到有，从弱到强。引入npm、gulp工作流，前端切图产出无缝接入后端，大大提升开发效率，原来5天开发缩短为2天。',
        duties: [],
      },
      {
        company: '北京华辰创想',
        title: '.NET工程师',
        period: ['2012.9', '2014.4'],
        desc: '参与公司的课件管理平台研发',
        // stack: [],
        duties: [],
      },
    ]
    const projects = [
      {
        company: '个人站点重构',
        title: '重构个人站点',
        period: ['2018.4', '2018.6'],
        desc: '使用 React & Gatsby.js 重构',
        stack: ['react.js', 'gatsby.js', 'es6', 'git'],
        duties: [
          '<a href="https://yangerxiao.com/">首页</a> ',
          '<a href="https://blog.yangerxiao.com/">博客</a>',
        ],
      },
      {
        company: '飞华分站',
        title: '主程，从后台到前台，从后端到前端',
        period: ['2017.6', '2017.9'],
        desc: '飞华资讯类网站在各省的分站，可以通过后台管理分站和资讯数据。',
        stack: ['jQuery', 'semantic-ui', 'PHP', 'smarty', 'docker', 'mysql'],
        duties: [
          '负责把控项目的进度 & 所有功能的实现',
          '举例：<a href="http://nmg.fh21.com.cn/">前台：内蒙古分站</a> & <a href="http://fs3.fh21.com.cn/">后台：FS3管理系统</a>',
          '<a href="https://blog.yangerxiao.com/posts/fh-21-subsite-summary">针对该项目的总结</a>',
        ],
      },
      {
        company: '飞华频道网站重构',
        title:
          '飞华健康网问答、医院、医生、电话咨询、名医义诊、疾病百科等频道的改版重构，负责前端交互效果。',
        period: ['2014.6', '2018.2'],
        desc: '飞华资讯类网站在各省的分站，可以通过后台管理分站和资讯数据。',
        stack: ['javascript', 'jQuery', 'PHP', 'smarty', 'zepto.js', 'mysql'],
        duties: [
          '<a href="https://iask.fh21.com.cn/">飞华问答</a>，<a href="https://news.fh21.com.cn/">飞华新闻</a>等',
          '负责全站的前端开发任务',
          '消化需求，分配开发任务',
          '招聘与管理',
        ],
      },
      {
        company: '医患帮',
        title:
          '致力于解决医患关系的平台，参与并负责APP边际页开发，官网的开发以及微信公众号的开发。',
        period: ['2015.3', '2015.10'],
        desc:
          '致力于解决医患关系的平台，参与并负责APP边际页开发，官网的开发以及微信公众号的开发。',
        stack: ['javascript', 'zepto.js', 'smarty'],
        duties: ['负责把控项目前端开发进度', '该项目已死掉'],
      },
      {
        company: 'Microsoft Study Centre(Win8 App)',
        title: 'Win8平台下的在线学习应用。',
        period: ['2013.9', '2014.2'],
        desc:
          '使用XAML/C#语言，MVVC模式开发。负责“Win8应用开发与维护"这一方面。',
        stack: ['.NET Framework', 'C#'],
        duties: [],
      },
      {
        company: 'Muilti-Tenant E-Training Platform',
        title: '多租户在线培训平台',
        desc: '',
        period: ['2012.7', '2013.6'],
        stack: ['asp.net', 'webservice', 'ajax', 'json'],
        duties: [],
      },
    ]
    const edu = {
      company: '贵阳学院',
      title: ['本科', '软件工程'].join('/'),
      period: ['2008.9', '2012.9'],
      duties: [
        '2010全国大学生数学建模国家一等奖',
        '英语六级',
        '国家励志奖学金',
      ],
    }
    const {
      title: siteTitle,
      description: siteDescription,
    } = this.props.data.site.siteMetadata

    return (
      <>
        <CommonStyle />
        <Container>
          <Helmet>
            <title>{siteTitle} - 简历</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <Profile {...profile} />
          <ExpTitle title="技能" />
          <section className="skills">
            <div className="skill">
              <h3>语言</h3>
              <em>Javascript/ES6</em>
              <p>HTML/CSS/Scss</p>
              <p>PHP/Smarty/C#</p>
              <p>shell/SQL</p>
            </div>
            <div className="skill">
              <h3>框架/类库</h3>
              <em>react</em>
              <p>jQuery/zepto.js</p>
              <p>Bootstrap/Semantic-UI</p>
            </div>
            <div className="skill">
              <h3>工具</h3>
              <em>VS CODE</em>
              <p>SVN/Git</p>
              <p>Chrome DevTools</p>
            </div>
            <div className="skill">
              <h3>操作系统</h3>
              <p>Linux/CentOS</p>
              <em>Mac OS</em>
              <p>Windows</p>
            </div>
            <div className="skill">
              <h3>工程化</h3>
              <p>create-react-app</p>
              <p>webpack/babel</p>
              <p>Node.js/gulp</p>
            </div>
            <div className="skill">
              <h3>偏爱</h3>
              <p>Google</p>
              <p>stackoverflow</p>
              <p>open source</p>
            </div>
          </section>
          <ExpTitle title="工作经历" />
          {jobs.map(job => (
            <WorkExp key={job.title} {...job} />
          ))}
          <ExpTitle title="项目经验" />
          {projects.map(project => (
            <WorkExp key={project.title} {...project} />
          ))}
          <ExpTitle title="教育经历" />
          <WorkExp {...edu} />
          <ExpTitle title="其它" />
          <ul className="others">
            <li>相信：技术服务产品，创造美好体验</li>
            <li>英语六级，习惯英语阅读</li>
            <li>
              可能是写代码里单人单次骑行最远的[1个月2400+km]，骑行里最会写代码的
            </li>
          </ul>
        </Container>
        <PdfBtn />
      </>
    )
  }
}

export default Resume

export const resume2Query = graphql`
  query resume2Query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
