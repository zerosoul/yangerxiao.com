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
  @media ${media.tablet} {
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
        email: 'yanggc888@163.com',
        tel: '18201385848',
      },
    }
    const jobs = [
      {
        company: '北京点点未来教育科技有限公司',
        title: '前端技术经理',
        period: ['2018.3', '至今'],
        desc:
          '从一线开始做起，一步一个脚印走到技术经理的职位，负责全公司的前端开发：理解和把控需求，统筹前端资源，研究和推动落地技术升级迭代，提高生产力，团建。',
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
        duties: [],
      },
    ]
    const projects = [
      {
        company: '壹点壹滴官网重构',
        title: '全栈开发',
        period: ['2019.5', '至今'],
        desc:
          '重构前，官网文章都是写死在代码库；重构后，有专门后台供运营录入文章，大大解放了程序员维护精力。',
        stack: [
          'react.js',
          'graphql',
          'gatsby.js',
          'express',
          'mongodb/mogoose',
          'pm2',
        ],
        duties: [
          '从零开始搭建全栈架构',
          'graphql做接口对接',
          'mongodb/mogoose做数据库解决方案',
          'gatsby.js做前台官网展示页面，SEO优化',
          'PM2做Node进程管理（生产和本地）',
          '负责所有的后台数据管理系统开发工作',
          '负责部分前台官网的开发工作',
        ],
      },
      {
        company: '壹点壹滴数据管理中心',
        title: '前期主程，现在做一些管理工作',
        period: ['2018.5', '至今'],
        desc: '各个产品线的业务数据均在该系统里处理',
        stack: ['react.js', 'redux', 'antd', 'eslint'],
        duties: [
          '负责园所和财务两大核心模块的前端开发',
          '刚接手该系统时，开发任务比较多，通过不断升级架构，尽可能使用工程化方式来解决问题，在人手短缺的情况下，保质保量完成了开发任务',
        ],
      },
      {
        company: '代理商会议报名系统',
        title: '实现类似易企秀效果的H5',
        period: ['2019.05', '2019.06'],
        desc: '一人负责前端报名页面的实现',
        stack: ['react.js', 'anime.js', 'swiper.js'],
        duties: [
          '从零搭建开发架子',
          '引入swiper.js & anime.js，实现了丰富的动效和交互效果',
          '体验上获得了市场部们和用户一致好评',
        ],
      },
      {
        company: '壹点壹滴超级公众号',
        title: '重构工程化架构，参与部分业务代码开发',
        period: ['2018.9', '至今'],
        desc:
          '公司主打平台，包含产品非常多，包括不限于：家园共育，哄宝神器，育儿头条，今日宝宝等。赋能幼儿园互联网化管理功能：考勤，社交，写文章等',
        stack: ['react.js', 'redux', 'styled-commonponents', 'eslint'],
        duties: [
          '重构部分业务代码，打样板，推动重构计划落地',
          '引入ESLint，保障了代码质量',
          '引入commitlint，保障了git提交质量',
          '升级webpack：3.x->4.x，以及各种loader，plugin，引入DLL打包机制，构建速度和打包大小均有质的提升',
          '升级react：15.x->16.x，改造已废弃生命周期函数，使用新特性，如：hooks，同样的功能，代码量少近三分之一，增加了可维护性，性能也有所提升',
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
          '理解需求，分配开发任务',
          '招聘与管理',
        ],
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
              <em>react/redux/styled-components</em>
              <p>jQuery/zepto.js</p>
              <p>Bootstrap/Semantic-UI/antd</p>
            </div>
            <div className="skill">
              <h3>工具</h3>
              <em>VS CODE</em>
              <p>git/gitlab</p>
              <p>Jenkins/pm2</p>
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
              <p>CRA</p>
              <p>webpack/babel</p>
              <p>ESLint/prettier</p>
              <p>husky/commitlint</p>
            </div>
            <div className="skill">
              <h3>偏爱</h3>
              <em>Google</em>
              <p>stackoverflow</p>
              <p>github</p>
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
            <li>
              Side Projects：
              <a href="https://works.yangerxiao.com">
                https://works.yangerxiao.com
              </a>
            </li>
            <li>相信：技术服务产品，创造美好体验</li>
            <li>追求：有价值的产品，对用户产生正向影响</li>
            <li>英语还行，日常翻墙，习惯阅读一手信息</li>
            <li>骑行过长途(2345km+)，从贵州贵阳到山东聊城，半个中国</li>
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
