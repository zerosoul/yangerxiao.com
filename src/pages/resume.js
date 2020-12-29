import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import ExpTitle from '../components/resume/ExpTitle'
import WorkExp from '../components/resume/WorkExp'
// import PdfBtn from '../components/resume/PdfBtn'
import Profile from '../components/resume/Profile'
import { media } from '../utils/media'

const CommonStyle = createGlobalStyle`
body{
  background:#fff;
  font-family:"Microsoft Yahei", "Helvetica";
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
  padding: 2rem;
  margin: 2rem auto;
  /* border: 1px solid #999; */
  /* border-radius: 0.6rem; */
  box-shadow: 7px 5px 20px 0px #101010;
  max-width: 100%;
  @media ${media.tablet} {
    max-width: 90%;
  }
  @media ${media.desktop} {
    max-width: 76%;
  }
  @media print {
    margin: 0;
    max-width: 100%;
    box-shadow: none;
    break-before: always;
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    .skill {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 0.6rem;
      margin-bottom: 0;
      /* border: 1px solid #eee; */
      padding: 0.3rem;
      h3 {
        margin: 0.2rem 0;
        margin-bottom: 0.5rem !important;
        color: #666;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #eee;
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
        basic: '男 / 89年 / 山东 / 现居北京',

        blog: 'https://yangerxiao.com',
        github: 'https://github.com/zerosoul',
        email: 'yanggc888@163.com'
        // tel: '+86 18201385848'
      }
    }
    const jobs = [
      {
        company: '北京点点未来教育科技有限公司',
        title: '前端技术经理',
        period: ['2018.5', '至今'],
        desc:
          '一线做起，逐步到前端技术经理，负责全公司的前端开发：团队管理，理解和把控需求，统筹前端资源，保障进度，研究和推动落地技术升级迭代，提高生产力。',
        duties: []
      },
      {
        company: '飞华健康网',
        title: '前端工程师',
        period: ['2014.5', '2018.2'],
        desc:
          '公司第一位专职前端，与公司共成长，从前端工程师做到前端经理。引入npm、gulp工作流，前端切图产出无缝接入后端，大大提升开发效率，原来5天开发缩短为2天。',
        duties: []
      },
      {
        company: '北京华辰创想',
        title: '.NET工程师/ASP.NET',
        period: ['2012.9', '2014.4'],
        desc: '参与公司的课件管理平台研发',
        duties: []
      }
    ]
    const projects = [
      {
        company: '壹点壹滴-幼教云(SaaS)',
        title: '重构工程化架构，参与部分产品业务线代码开发',
        period: ['2018.9', '至今'],
        desc:
          '公司主打SaaS平台，包含产品线较多，包括不限于：家园共育，哄宝神器，育儿头条，今日宝宝等。赋能幼儿园互联网化管理功能：考勤，社交，写文章等',
        stack: [
          'react',
          'redux',
          'antd',
          'styled-commonponents',
          'anime.js',
          'webpack',
          'ESLint'
        ],
        duties: [
          '刚接手该系统时，开发任务比较多，通过不断升级架构，尽可能使用工程化方式来解决问题，在人手短缺的情况下，保质保量完成了开发任务',
          '重构部分业务代码，打样板，并推动重构计划落地',

          // '引入ESLint/Husky/lint-staged组合，保障代码提交质量',
          // '引入CommitLint，保障了git提交质量',
          // '升级webpack：3.x->4.x，以及各种loader，plugin，引入DLL打包机制，构建速度和打包大小均有质的提升',
          // '升级react：15.x->16.x，改造已废弃生命周期函数，使用新特性，如：hooks，同样的功能，代码量少近三分之一，增加了可维护性，性能也有所提升',
          '代理商会议报名页面主程：引入swiper.js & anime.js，实现了丰富的动效和交互效果，体验上获得了市场部和用户一致好评',
          '幼师最强大脑小程序主程'
        ]
      },
      {
        company: '壹点壹滴官网重构与维护',
        title: '全栈开发',
        period: ['2019.5', '至今'],
        desc:
          '重构前，文章写死在代码库；重构后，有专门后台供运营录入文章，大大解放了程序员维护迭代精力。',
        stack: [
          'react',
          'GraphQL',
          'Gatsby.js',
          'Express',
          'MongoDB/mogoose',
          'pm2'
        ],
        duties: [
          '搭建全栈架构，接口：GraphQL；数据库：MongoDB/mogoose；前台官网：Gatsby.js；后台数据管理：Express'
        ]
      },

      {
        company: '飞华网站',
        title:
          '飞华健康网问答、医院、医生、电话咨询、名医义诊、疾病百科等频道的改版重构，负责前端交互效果。',
        period: ['2014.6', '2018.2'],
        desc: '飞华资讯类网站在各省的分站，可以通过后台管理分站和资讯数据。',
        stack: ['javascript', 'jQuery', 'PHP', 'smarty', 'docker', 'mysql'],
        duties: [
          '<a href="https://iask.fh21.com.cn/">飞华问答</a>，<a href="https://news.fh21.com.cn/">飞华新闻</a>等',
          '飞华分站：负责把控项目的进度 & 所有功能的实现，<a target="_blank" href="https://blog.yangerxiao.com/posts/fh-21-subsite-summary">该项目总结</a>',
          '负责全站的前端开发，理解需求，分配开发任务，招聘与管理'
        ]
      }
    ]
    const edu = {
      company: '贵州大学-贵阳学院',
      title: ['本科', '软件工程'].join('/'),
      period: ['2008.9', '2012.9'],
      duties: [
        '2010全国大学生数学建模：国家一等奖',
        '英语六级',
        '国家励志奖学金'
      ]
    }
    const {
      title: siteTitle,
      description: siteDescription
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
              <p>Node.js/Express/hapi</p>
              <p>HTML/CSS/Less</p>
              <p>PHP/Smarty/C#</p>
              <p>Shell/SQL/GraphQL</p>
            </div>
            <div className="skill">
              <h3>框架/类库</h3>
              <em>react/redux/react-router</em>
              <p>Gatsby.js/styled-components</p>
              <p>小程序（微信&钉钉）</p>
              <p>jQuery/zepto.js</p>
              <p>antd/Bootstrap/Semantic-UI</p>
            </div>
            <div className="skill">
              <h3>工具</h3>
              <em>VS CODE</em>
              <p>Git/GitLab</p>
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
              <em>CRA</em>
              <p>webpack/babel</p>
              <p>ESLint/prettier</p>
              <p>Husky/CommitLint</p>
            </div>
            <div className="skill">
              <h3>偏爱</h3>
              <em>Google</em>
              <p>StackOverflow</p>
              <p>Github/Open Source</p>
            </div>
          </section>
          <ExpTitle title="教育" />
          <WorkExp {...edu} />
          <ExpTitle title="工作经历" />
          {jobs.map((job) => (
            <WorkExp key={job.title} {...job} />
          ))}
          <ExpTitle title="项目经验" />
          {projects.map((project) => (
            <WorkExp key={project.title} {...project} />
          ))}

          <ExpTitle title="其它" />
          <WorkExp
            duties={[
              '英语阅读流利（听说较弱），习惯阅读一手信息。',
              '喜欢创作，UX和逻辑，偏爱简洁有美感。',
              `<em>中国色网站</em>作者：<a target="_blank" href="http://colors.ichuantong.cn/">colors.ichuantong.cn</a>`,
              `<em>rc-bullets</em>作者：<a target="_blank" href="https://github.com/zerosoul/rc-bullets">github.com/zerosoul/rc-bullets</a>`,
              `更多个人作品：<a target="_blank" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
              '骑行过长途(2345km+/单人一个月)，从贵州贵阳到山东聊城，半个中国：<em>可能是写代码里单人骑行最长的，骑行里最会写代码的。</em>'
            ]}
          />
        </Container>
        {/* <PdfBtn /> */}
      </>
    )
  }
}

export default Resume

export const resumeQuery = graphql`
  query resumeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
