import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { graphql } from 'gatsby'
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
        basic: '男 / 89 年 / 山东',
        blog: 'https://yangerxiao.com',
        github: 'https://github.com/zerosoul',
        email: 'yanggc888@163.com'
      }
    }
    const jobs = [
      {
        company: '自由职业者',
        title: '',
        period: ['2023.09', '至今'],
        desc: '以自由职业者的身份工作：维护现有产品，创造新产品，为别人做产品',
        duties: []
      },
      {
        company: 'Privoce',
        title: 'VP of Engineering',
        period: ['2020.12', '2023.08'],
        desc: 'privoce.com 联合创始人。参与核心产品——Portal 和 voce.chat 的产品研发。负责整体技术架构、核心功能、团队建设以及部分产品运维增长工作',
        duties: []
      },
      {
        company: '北京点点未来教育科技有限公司',
        title: '前端技术经理',
        period: ['2018.5', '2020.11'],
        desc: '前端技术经理，负责公司的前端开发：团队管理，理解和把控需求，统筹前端资源，保障进度，研究和推动落地技术升级迭代，提高生产力。',
        duties: []
      },
      {
        company: '飞华健康网',
        title: '前端工程师',
        period: ['2014.5', '2018.2'],
        desc: '公司第一位专职前端，与公司共成长，从前端工程师做到前端经理。引入 npm、gulp 工作流，前端切图产出无缝接入后端，大大提升开发效率，原来 5 天开发缩短为 2 天。',
        duties: []
      },
      {
        company: '北京华辰创想',
        title: '.NET 工程师/ASP.NET',
        period: ['2012.9', '2014.4'],
        desc: '参与公司的课件管理平台研发',
        duties: []
      }
    ]
    const projects = [
      {
        company: (
          <a target="_blank" href="https://peekfoc.us">
            PeekFocus
          </a>
        ),
        period: ['2024.12', '至今'],
        desc: '浏览器插件产品：不开新标签页的前提下，预览网址内容，进而避免海量的 Tab 管理烦恼',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'wxt',
          'cloudflare',
          'tailwind',
          'nextjs',
          'supabase',
          'stripe'
        ],
        duties: ['负责产品所有事宜']
      },
      {
        company: (
          <a target="_blank" href="https://edensign.io">
            Edensign
          </a>
        ),
        period: ['2024.10', '至今'],
        desc: '用户上传一张室内图，借助 AI，生成特定风格的家居图，赋予房地产专业人士和设计师以最佳方式展示房产的能力',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'cloudflare',
          'tailwind',
          'nextjs',
          'supabase',
          'stripe'
        ],
        duties: ['负责除 LLM API 外的所有开发和产品工作']
      },

      {
        company: (
          <a target="_blank" href="https://sinqi.tools">
            Sinqi Tools
          </a>
        ),
        period: ['2024.03', '至今'],
        desc: '为开发人员、设计师和完美主义者精心打造的 Web 工具',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'cloudflare worker',
          'tailwind',
          'supabase',
          'nextjs',
          'stripe'
        ],
        duties: ['负责产品所有事宜']
      },
      {
        company: (
          <a target="_blank" href="https://voce.chat">
            VoceChat
          </a>
        ),
        period: ['2021.03', '至今'],
        desc: '一个超轻量级的聊天应用、API 和 SDK，基于 Rust 开发，支持私有部署',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'tailwind',
          'nextjs',
          'stripe',
          'webpack',
          'ESLint'
        ],
        duties: ['除了聊天的后端服务开发，负责所有开发和运维工作']
      },
      {
        company: '壹点壹滴 - 幼教云 (SaaS)',
        title: '重构工程化架构，参与部分产品业务线代码开发',
        period: ['2018.9', '2020.03'],
        desc: '公司主打 SaaS 平台，包含产品线较多，包括不限于：家园共育，哄宝神器，育儿头条，今日宝宝等。赋能幼儿园互联网化管理功能：考勤，社交，写文章等',
        stack: [
          'react',
          'redux',
          'antd',
          'styled-components',
          'anime.js',
          'webpack',
          'ESLint'
        ],
        duties: [
          '刚接手该系统时，开发任务比较多，通过不断升级架构，尽可能使用工程化方式来解决问题，在人手短缺的情况下，保质保量完成了开发任务',
          '重构部分业务代码，打样板，并推动重构计划落地'
        ]
      },
      {
        company: '壹点壹滴官网重构与维护',
        title: '全栈开发',
        period: ['2019.5', '2020.03'],
        desc: '重构前，文章写死在代码库；重构后，有专门后台供运营录入文章，大大解放了程序员维护迭代精力。',
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
      }
    ]
    const edu = {
      company: '贵州大学 - 贵阳学院',
      title: ['本科', '软件工程'].join('/'),
      period: ['2008.9', '2012.9'],
      duties: [
        '2010 全国大学生数学建模：国家一等奖',
        '英语六级',
        '国家励志奖学金'
      ]
    }
    const { title: siteTitle, description: siteDescription } =
      this.props.data.site.siteMetadata

    return (
      <>
        <CommonStyle />
        <Container>
          <Profile {...profile} />
          <ExpTitle title="技能" />
          <section className="skills">
            <div className="skill">
              <h3>语言</h3>
              <em>Typescript/ES6</em>
              <p>Node.js/Express/hapi</p>
              <p>HTML/CSS/Less</p>
              <p>PHP/Smarty/C#</p>
              <p>Shell/SQL/GraphQL</p>
            </div>
            <div className="skill">
              <h3>框架/类库/平台</h3>
              <em>react/redux/tailwind</em>
              <em>nextjs/supabase</em>
              <em>cloudflare/vercel</em>
              <p>Chrome Extension/wxt</p>
            </div>
            <div className="skill">
              <h3>工具</h3>
              <em>VS CODE</em>
              <p>Git/GitLab</p>
              <p>Jenkins/pm2</p>
              <p>Claude/Deepseek</p>
            </div>
            <div className="skill">
              <h3>操作系统</h3>
              <p>Linux/CentOS</p>
              <em>MacOS</em>
              <p>Windows</p>
            </div>
            <div className="skill">
              <h3>工程化</h3>
              <p>vite/webpack</p>
              <p>ESLint/prettier</p>
              <p>Husky/CommitLint</p>
            </div>
            <div className="skill">
              <h3>偏爱</h3>
              <em>Google/Ask AI</em>
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
              '英语读写流利（听说较弱），习惯阅读一手信息。',
              '喜欢创作，UX和逻辑，偏爱简洁有美感。',
              `<em>中国色网站</em>作者：<a target="_blank" href="http://colors.ichuantong.cn/">colors.ichuantong.cn</a>`,
              `更多个人作品：<a target="_blank" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
              '骑行过长途 (2345km+/单人一个月)，从贵州贵阳到山东聊城，半个中国：<em>可能是写代码里单人骑行最长的，骑行里最会写代码的。</em>'
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

export function Head({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <>
      <title>{title} - 简历</title>
      <meta name="description" content={description} />
    </>
  )
}
