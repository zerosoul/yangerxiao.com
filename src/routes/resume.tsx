import { createFileRoute } from '@tanstack/react-router'
import EduExp from '~/components/resume/EduExp'
import ExpTitle from '~/components/resume/ExpTitle'
import Profile from '~/components/resume/Profile'
import WorkExp from '~/components/resume/WorkExp'
import { siteMetadata } from '~/config/site'

export const Route = createFileRoute('/resume')({
  head: () => ({
    meta: [
      { title: `${siteMetadata.title} - 简历` },
      { name: 'description', content: siteMetadata.description }
    ]
  }),
  component: ResumePage
})

const profile = {
  name: '杨国春',
  info: {
    basic: '男 / 89 年 / 山东',
    blog: 'https://yangerxiao.com',
    github: 'https://github.com/zerosoul',
    email: 'yanggc888@gmail.com'
  }
}

const jobs = [
  {
    company: 'Edensign',
    title: '产品工程师',
    period: ['2024.09', '至今'],
    desc: 'Edensign 产品工程师，从零到一构建出 Edensign 核心产品，目前负责增长。',
    duties: []
  },
  {
    company: '自由职业者',
    title: 'Freelancer',
    period: ['2023.09', '2024.10'],
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
      <a target="_blank" rel="noreferrer" href="https://bankoftime.ai">
        BankOfTime
        <img
          width={20}
          height={20}
          src="/ext-link.svg"
          alt=""
          className="ml-1 inline-block"
        />
      </a>
    ),
    period: ['2025.03', '至今'],
    desc: '一个数字纪念平台，专注于为逝者创建永久的数字纪念空间，让生命的记忆得以延续和分享。',
    stack: [
      'react/typescript',
      'redux-toolkit',
      'nextjs',
      'cloudflare',
      'tailwind',
      'supabase',
      'stripe'
    ],
    duties: ['负责产品以及开发所有事宜']
  },
  {
    company: (
      <a target="_blank" rel="noreferrer" href="https://edensign.io">
        Edensign
        <img
          width={20}
          height={20}
          src="/ext-link.svg"
          alt=""
          className="ml-1 inline-block"
        />
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
      <a target="_blank" rel="noreferrer" href="https://sinqi.tools">
        Sinqi Tools
        <img
          width={20}
          height={20}
          src="/ext-link.svg"
          alt=""
          className="ml-1 inline-block"
        />
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
      <a target="_blank" rel="noreferrer" href="https://voce.chat">
        VoceChat
        <img
          width={20}
          height={20}
          src="/ext-link.svg"
          alt=""
          className="ml-1 inline-block"
        />
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
    duties: ['除了聊天 SDK 后端服务开发，负责所有开发和运维工作']
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
      '重构业务代码，通过不断升级架构，尽可能使用工程化方式来解决问题，打样板，并推动重构计划落地'
    ]
  }
]

const edu = {
  school: '贵州大学 - 贵阳学院',
  title: ['本科', '软件工程'].join('/'),
  period: ['2008.9', '2012.9'],
  achievements: [
    '2010 全国大学生数学建模：国家一等奖',
    '国家励志奖学金',
    '英语六级'
  ]
}

function ResumePage() {
  return (
    <div className=" mx-auto my-8 max-w-full p-8 shadow-[7px_5px_20px_0px_#101010] tablet:max-w-[90%] desktop:max-w-[76%] print:m-0 print:max-w-full print:shadow-none print:break-before-page font-[Microsoft_Yahei,Helvetica]">
      <Profile {...profile} />

      <ExpTitle title="技能" />
      <section className="flex flex-wrap">
        <SkillBlock title="语言">
          <em className="block text-sm font-extrabold not-italic text-black">
            Typescript/ES6
          </em>
          <p className="m-0 text-sm whitespace-pre">Node.js/hono</p>
          <p className="m-0 text-sm whitespace-pre">HTML/CSS</p>
          <p className="m-0 text-sm whitespace-pre">PHP/Smarty/C#</p>
          <p className="m-0 text-sm whitespace-pre">Shell/SQL/GraphQL</p>
        </SkillBlock>
        <SkillBlock title="框架/类库/平台">
          <em className="block text-sm font-extrabold not-italic text-black">
            react/tanstack/tailwind
          </em>
          <em className="block text-sm font-extrabold not-italic text-black">
            Next.js/Supabase
          </em>
          <em className="block text-sm font-extrabold not-italic text-black">
            cloudflare/aws
          </em>
          <p className="m-0 text-sm whitespace-pre">redux(rtk)/react-router</p>
          <p className="m-0 text-sm whitespace-pre">Browser Extension</p>
        </SkillBlock>
        <SkillBlock title="工具">
          <em className="block text-sm font-extrabold not-italic text-black">
            VS CODE
          </em>
          <p className="m-0 text-sm whitespace-pre">Git/GitLab</p>
          <p className="m-0 text-sm whitespace-pre">Jenkins/pm2</p>
        </SkillBlock>
        <SkillBlock title="工程化">
          <p className="m-0 text-sm whitespace-pre">monorepo/turbo</p>
          <p className="m-0 text-sm whitespace-pre">
            <em className="font-extrabold not-italic text-black">vite</em>
            /webpack
          </p>
          <p className="m-0 text-sm whitespace-pre">ESLint/prettier</p>
          <p className="m-0 text-sm whitespace-pre">Husky/CommitLint</p>
        </SkillBlock>
        <SkillBlock title="偏爱">
          <em className="block text-sm font-extrabold not-italic text-black">
            Claude Code
          </em>
          <p className="m-0 text-sm whitespace-pre">StackOverflow</p>
          <p className="m-0 text-sm whitespace-pre">Github/Open Source</p>
        </SkillBlock>
      </section>

      <ExpTitle title="教育" />
      <EduExp {...edu} />

      <ExpTitle title="工作经历" />
      {jobs.map((job) => (
        <WorkExp key={job.title} {...job} />
      ))}

      <ExpTitle title="项目经验" />
      {projects.map((project, i) => (
        <WorkExp key={i} {...project} />
      ))}

      <ExpTitle title="其它" />
      <WorkExp
        company=""
        duties={[
          '英语读写流利（听说较弱），习惯阅读一手信息。',
          '偏爱简洁有美感的UX和逻辑',
          `<em>中国色网站</em>作者：<a target="_blank" rel="noreferrer" href="http://colors.ichuantong.cn/">colors.ichuantong.cn</a>`,
          `更多个人作品：<a target="_blank" rel="noreferrer" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
          '2500 公里单人骑行穿越半个中国——可能是程序员中最能骑的，骑行者中最会编程的。'
        ]}
      />
    </div>
  )
}

function SkillBlock({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mr-2 mb-0 flex flex-col items-start p-1 last:mr-0">
      <h3 className="m-0 mt-1 mb-2 border-b border-neutral-200 pb-1 text-neutral-500">
        {title}
      </h3>
      {children}
    </div>
  )
}
