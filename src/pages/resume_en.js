import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import { graphql } from 'gatsby'
import ExpTitle from '../components/resume/ExpTitle'
import WorkExp from '../components/resume/WorkExp'
import EduExp from '../components/resume/EduExp'
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
    break-inside: avoid;
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
        /* text-transform: none; */
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
class ResumeEn extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const profile = {
      name: 'Tristan Yang',
      info: {
        // title: 'Freelancer',
        basic: 'Male / 35 / Liaocheng Shandong',
        blog: 'https://yangerxiao.com',
        github: 'https://github.com/zerosoul',
        email: 'yanggc888@gmail.com'
      }
    }
    const jobs = [
      {
        company: 'Freelancer',
        title: 'Freelancer',
        period: ['2023.09', 'today'],
        desc: 'Maintain existing products, try to create new products, help others create products, and work as a freelancer.',
        duties: []
      },
      {
        company: 'Privoce',
        title: 'VP of Engineering',
        period: ['2020.12', '2023.09'],
        desc: 'Co-founder of Privoce.com. In charge of the engineering development of the core product functionalities — Portal and voce.chat. Responsible for the overall technical architecture, team building, and the development of the engineering team.',
        duties: []
      },
      {
        company: 'Beijing Diandian Future Education Technology Co., Ltd',
        title: 'Frontend Tech Manager',
        period: ['2018.5', '2020.11'],
        desc: 'Starting from the front line, one step at a time to the position of technical manager, responsible for the front-end development of the whole company: understanding and controlling the requirements, coordinating front-end resources, guaranteeing the progress, researching and promoting the implementation of technical upgrades and iterations to improve productivity.',
        duties: []
      },
      {
        company: 'Feihua Health Technology Co., Ltd',
        title: 'Frontend Development Engineer',
        period: ['2014.5', '2018.2'],
        desc: "The company's first full-time front-end, growing with the company, from front-end engineer to front-end manager, the company's front-end from scratch, from weak to strong. Introduced npm, gulp workflow, front-end slicing output seamlessly into the back-end, greatly improving development efficiency, the original 5 days of development shortened to 2 days.",
        duties: []
      },
      {
        company: 'Beijing Huachen creative Co., Ltd',
        title: '.NET Engineer/ASP.NET',
        period: ['2012.9', '2014.4'],
        desc: "Participate in the development of the company's courseware management platform",
        duties: []
      }
    ]
    const projects = [
      {
        company: (
          <a target="_blank" href="https://edensign.io">
            Edensign
          </a>
        ),
        period: ['2024.10', 'today'],
        desc: 'Edensign is a cutting-edge virtual staging solution that empowers real estate professionals and designers to showcase properties in their best light.',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'cloudflare',
          'tailwind',
          'nextjs',
          'supabase',
          'next-ui',
          'stripe'
        ],
        duties: ['All development and product work except for the LLM API']
      },
      {
        company: (
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/Unsplash%20Wanderer/jdjjjnfdkhpdppedhjgdcecmmcmklopm"
          >
            Unsplash Wanderer
          </a>
        ),
        period: ['2024.08', '2024.09'],
        desc: 'Elevate your browsing with stunning Unsplash photos on every new tab. Simple, beautiful, and ad-free.',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'cloudflare',
          'tailwind',
          'nextjs',
          'supabase',
          'next-ui',
          'stripe'
        ],
        duties: ['Creator']
      },
      {
        company: (
          <a target="_blank" href="https://sinqi.tools">
            Sinqi Tools
          </a>
        ),
        period: ['2024.03', 'today'],
        desc: 'refined web tools for developers, designers and perfectionists',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'cloudflare worker',
          'tailwind',
          'supabase',
          'nextjs',
          'next-ui',
          'stripe'
        ],
        duties: ['Creator']
      },
      {
        company: (
          <a target="_blank" href="https://voce.chat">
            VoceChat
          </a>
        ),
        period: ['2021.03', 'today'],
        desc: 'A super-light Rust powered chat app, API and SDK that prioritizes private hosting.',
        stack: [
          'react/typescript',
          'redux-toolkit',
          'tailwind',
          'nextjs',
          'stripe',
          'webpack',
          'ESLint'
        ],
        duties: [
          'All development and operations work except for the backend service of chat'
        ]
      },
      {
        company: 'Preschool Education Cloud Platform(SaaS)',
        period: ['2018.9', '2020.12'],
        desc: "Including but not limited: Home Edu, Parenting headlines, Today's baby, etc. Enabling kindergarten Internet management functions: attendance, social, writing weixin articles, etc",
        stack: [
          'react',
          'redux',
          'antd',
          'styled-commonponents',
          'anime.js',
          'webpack',
          'ESLint'
        ],
        duties: ['Reconstruct the engineering architecture']
      },
      {
        company: 'Landing Page System Development',
        title: 'Fullstack Development',
        period: ['2019.5', '2020.11'],
        desc: 'Before: all the articles hard coded in the codebase; After: providing platform to input and publish articles.Saving time too much!',
        stack: [
          'react',
          'GraphQL',
          'Gatsby.js',
          'Express',
          'MongoDB/mogoose',
          'pm2'
        ],
        duties: [
          'Fullstack: APIs:GraphQL;DB:MongoDB/mogoose;Landing Page:Gatsby.js;Backend:Express'
        ]
      }

      // {
      //   company: 'FeiHua Websites',
      //   title:
      //     'Feihua website channels: ask,hospital,doctor,tel-consulting,etc.Responsible for all frontend development work',
      //   period: ['2014.6', '2018.2'],
      //   desc: 'Feihua website informative sub-stations in each province, you can manage the sub-stations and data through the backend platform.',
      //   stack: ['javascript', 'jQuery', 'PHP', 'smarty', 'docker', 'mysql'],
      //   duties: [
      //     'Responsible for front-end development of the whole site, understanding requirements, assigning development tasks, recruiting and managing'
      //   ]
      // }
    ]
    const edu = {
      school: 'GuiYang University',
      title: ['Bachelor', 'Software Engineering'].join('/'),
      period: ['2008.9', '2012.9'],
      achievements: [
        'CUMCM-2010:National First Prize',
        'CET-6',
        'National Endeavor Fellowship'
      ]
    }

    return (
      <>
        <CommonStyle />
        <Container>
          <Profile {...profile} en={true} />
          <ExpTitle title="SKILLS" />
          <section className="skills">
            <div className="skill">
              <h3>Languages</h3>
              <em>Typescript/ES6</em>
              <p>Node.js/Express/hapi</p>
              <p>HTML/CSS/Less</p>
              <p>PHP/Smarty/C#</p>
              <p>Shell/SQL/GraphQL</p>
            </div>
            <div className="skill">
              <h3>Frameworks/Libraries</h3>
              <em>react/next-ui/tailwind</em>
              <em>nextjs/supabase</em>
              <p>redux(rtk)/react-router</p>
              <p>Gatsby.js/styled-components</p>
              <p>Chrome Extension</p>
            </div>
            <div className="skill">
              <h3>Tools</h3>
              <em>VS CODE</em>
              <p>Git/GitLab</p>
              <p>Jenkins/pm2</p>
              <p>Vercel</p>
            </div>
            <div className="skill">
              <h3>Operation System</h3>
              <p>Linux/CentOS</p>
              <em>Mac OS</em>
              <p>Windows</p>
            </div>
            <div className="skill">
              <h3>Engineering</h3>
              <em>Vite</em>
              <p>webpack/babel</p>
              <p>ESLint/prettier</p>
              <p>Husky/CommitLint</p>
            </div>
            <div className="skill">
              <h3>Preferred</h3>
              <em>Google/ChatGPT</em>
              <p>StackOverflow</p>
              <p>Github/Open Source</p>
            </div>
          </section>
          <ExpTitle title="EDUCATION" />
          <EduExp {...edu} />
          <ExpTitle title="WORKING EXPERIENCE" />
          {jobs.map((job) => (
            <WorkExp key={job.title} {...job} />
          ))}
          <ExpTitle title="PROJECT EXPERIENCE" />
          {projects.map((project) => (
            <WorkExp key={project.title} {...project} />
          ))}

          <ExpTitle title="ADDITIONAL INFORMATION" />
          <WorkExp
            duties={[
              'Proficient in English reading and writing, but speaking is relatively weaker.',
              'A preference for simple and aesthetically pleasing UX and logic',
              `Author of <em> <a target="_blank" href="http://sinqi.tools/">Sinqi Tools</a></em> and <a target="_blank" href="http://colors.ichuantong.cn/">Chinese Color (Github Star:2.4k+)</a>, more works: <a target="_blank" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
              'Rode long distance (2345km+/single person a month), from Guiyang, Guizhou to Liaocheng, Shandong, half of China: <em>probably the longest single person ride in writing code, and the best in writing code among cyclists.</em>'
            ]}
          />
        </Container>
        {/* <PdfBtn /> */}
      </>
    )
  }
}

export default ResumeEn

export function Head() {
  return (
    <>
      <title>Tristan Yang's Resume</title>
      <meta name="description" content={"Tristan Yang's Resume"} />
    </>
  )
}
