import { createFileRoute } from '@tanstack/react-router'
import ExpTitle from '~/components/resume/ExpTitle'
import WorkExp from '~/components/resume/WorkExp'
import EduExp from '~/components/resume/EduExp'
import Profile from '~/components/resume/Profile'

export const Route = createFileRoute('/resume_en')({
  head: () => ({
    meta: [
      { title: "Tristan Yang's Resume" },
      { name: 'description', content: "Tristan Yang's Resume" }
    ]
  }),
  component: ResumeEnPage
})

const profile = {
  name: 'Tristan Yang',
  info: {
    basic: 'Male / 35 / Liaocheng Shandong',
    blog: 'https://yangerxiao.com',
    github: 'https://github.com/zerosoul',
    email: 'yanggc888@gmail.com'
  }
}

const jobs = [
  {
    company: 'Edensign',
    title: 'Product Engineer',
    period: ['2024.09', 'Present'],
    desc: 'Product Engineer at Edensign. Built the core product from zero to one; currently leading growth.',
    duties: []
  },
  {
    company: 'Freelancer',
    title: 'Freelancer',
    period: ['2023.09', '2024.10'],
    desc: 'Maintain existing products, try to create new products, help others create products, and work as a freelancer.',
    duties: []
  },
  {
    company: 'Privoce',
    title: 'VP of Engineering',
    period: ['2020.12', '2023.09'],
    desc: 'Co-founder of Privoce.com. Led the engineering development — Portal and voce.chat. Responsible for technical architecture, team building, and engineering team development.',
    duties: []
  },
  {
    company: 'Beijing Diandian Future Education Technology Co., Ltd',
    title: 'Frontend Tech Manager',
    period: ['2018.5', '2020.11'],
    desc: "Advanced from front-line developer to technical manager, responsible for the front-end development of the whole company: analyzing and managing requirements, coordinating front-end resources, ensuring project delivery, researching and promoting the implementation of technical upgrades and iterations to improve productivity.",
    duties: []
  },
  {
    company: 'Feihua Health Technology Co., Ltd',
    title: 'Frontend Development Engineer',
    period: ['2014.5', '2018.2'],
    desc: "The company's first full-time front-end, growing with the company, from front-end engineer to front-end manager, built the company's front-end capabilities from the ground up. Introduced npm, gulp workflow, front-end slicing output seamlessly into the back-end, greatly improving development efficiency, the original 5 days of development shortened to 2 days.",
    duties: []
  },
  {
    company: 'Beijing Huachen Creative Co., Ltd',
    title: '.NET Engineer/ASP.NET',
    period: ['2012.9', '2014.4'],
    desc: "Participate in the development of the company's courseware management platform",
    duties: []
  }
]

const projects = [
  {
    company: (
      <a target="_blank" rel="noreferrer" href="https://edensign.io">
        Edensign
        <img width={20} height={20} src="/ext-link.svg" alt="" className="ml-1 inline-block" />
      </a>
    ),
    period: ['2024.10', 'Present'],
    desc: 'Edensign is a cutting-edge virtual staging solution that empowers real estate professionals and designers to showcase properties in their best light.',
    duties: ['Co-founder: All development and product work except for the LLM training and APIs']
  },
  {
    company: (
      <a target="_blank" rel="noreferrer" href="https://bankoftime.ai">
        Bank of Time
        <img width={20} height={20} src="/ext-link.svg" alt="" className="ml-1 inline-block" />
      </a>
    ),
    period: ['2025.03', 'Present'],
    desc: 'A digital place where lives are recorded, remembered, and honored.',
    duties: ['Co-founder: Responsible for all product and development matters']
  },
  {
    company: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://chromewebstore.google.com/detail/Unsplash%20Wanderer/jdjjjnfdkhpdppedhjgdcecmmcmklopm"
      >
        Unsplash Wanderer
        <img width={20} height={20} src="/ext-link.svg" alt="" className="ml-1 inline-block" />
      </a>
    ),
    period: ['2024.08', '2024.09'],
    desc: 'Elevate your browsing with stunning Unsplash photos on every new tab. Simple, beautiful, and ad-free.',
    duties: ['Creator and Owner']
  },
  {
    company: (
      <a target="_blank" rel="noreferrer" href="https://sinqi.tools">
        Sinqi Tools
        <img width={20} height={20} src="/ext-link.svg" alt="" className="ml-1 inline-block" />
      </a>
    ),
    period: ['2024.03', 'Present'],
    desc: 'refined web tools for developers, designers and perfectionists',
    duties: ['Creator and Owner']
  },
  {
    company: (
      <a target="_blank" rel="noreferrer" href="https://voce.chat">
        VoceChat
        <img width={20} height={20} src="/ext-link.svg" alt="" className="ml-1 inline-block" />
      </a>
    ),
    period: ['2021.03', 'Present'],
    desc: 'A super-light Rust powered chat app, API and SDK that prioritizes private hosting.',
    duties: ['All development and operations work except for the backend service of chat']
  },
  {
    company: 'Preschool Education Cloud Platform(SaaS)',
    period: ['2018.9', '2020.12'],
    desc: "Including but not limited: Home Edu, Parenting headlines, Today's baby, etc. Enabling kindergarten Internet management functions: attendance, social, writing weixin articles, etc",
    duties: ['Reconstruct the engineering architecture']
  }
]

const edu = {
  school: 'GuiYang University',
  title: ['Bachelor', 'Software Engineering'].join('/'),
  period: ['2008.9', '2012.9'],
  achievements: [
    'CUMCM-2010: National First Prize',
    'CET-6',
    'National Endeavor Fellowship'
  ]
}

function ResumeEnPage() {
  return (
    <div className="mx-auto my-8 max-w-full p-8 shadow-[7px_5px_20px_0px_#101010] tablet:max-w-[90%] desktop:max-w-[76%] print:m-0 print:max-w-full print:shadow-none print:break-before-page font-[Microsoft_Yahei,Helvetica]">
      <Profile {...profile} en />

      <ExpTitle title="SKILLS" />
      <section className="flex flex-wrap">
        <SkillBlock title="Languages">
          <em className="block text-sm font-extrabold not-italic text-black">Typescript/ES6</em>
          <p className="m-0 text-sm whitespace-pre">Node.js/Hono</p>
          <p className="m-0 text-sm whitespace-pre">HTML/CSS</p>
          <p className="m-0 text-sm whitespace-pre">PHP/Smarty/C#</p>
          <p className="m-0 text-sm whitespace-pre">SQL/GraphQL</p>
        </SkillBlock>
        <SkillBlock title="Frameworks/Libraries">
          <em className="block text-sm font-extrabold not-italic text-black">react/tanstack/tailwind</em>
          <em className="block text-sm font-extrabold not-italic text-black">Next.js/Supabase</em>
          <em className="block text-sm font-extrabold not-italic text-black">cloudflare/aws</em>
          <p className="m-0 text-sm whitespace-pre">redux(rtk)/react-router</p>
          <p className="m-0 text-sm whitespace-pre">Browser Extension</p>
        </SkillBlock>
        <SkillBlock title="Tools">
          <em className="block text-sm font-extrabold not-italic text-black">VS CODE</em>
          <p className="m-0 text-sm whitespace-pre">Git/GitLab</p>
          <p className="m-0 text-sm whitespace-pre">Jenkins/pm2</p>
          <p className="m-0 text-sm whitespace-pre">Vercel</p>
        </SkillBlock>
        <SkillBlock title="Engineering">
          <p className="m-0 text-sm whitespace-pre">monorepo/turbo</p>
          <p className="m-0 text-sm whitespace-pre">Vite/Webpack</p>
          <p className="m-0 text-sm whitespace-pre">ESLint/Prettier</p>
          <p className="m-0 text-sm whitespace-pre">Husky/CommitLint</p>
        </SkillBlock>
        <SkillBlock title="Preferred">
          <em className="block text-sm font-extrabold not-italic text-black">Claude Code</em>
          <p className="m-0 text-sm whitespace-pre">StackOverflow</p>
          <p className="m-0 text-sm whitespace-pre">Github/Open Source</p>
        </SkillBlock>
      </section>

      <ExpTitle title="EDUCATION" />
      <EduExp {...edu} />

      <ExpTitle title="WORKING EXPERIENCE" />
      {jobs.map((job) => (
        <WorkExp key={job.title} {...job} />
      ))}

      <ExpTitle title="PROJECT EXPERIENCE" />
      {projects.map((project, i) => (
        <WorkExp key={i} {...project} />
      ))}

      <ExpTitle title="ADDITIONAL INFORMATION" />
      <WorkExp
        company=""
        duties={[
          'Good at reading and writing English, but still working on my speaking skills.',
          'A preference for simple and aesthetically pleasing UX and logic',
          `Author of <a target="_blank" rel="noreferrer" href="http://colors.ichuantong.cn/">Chinese Color (Github Star:2.4k+)</a>, more works: <a target="_blank" rel="noreferrer" href="https://works.yangerxiao.com">works.yangerxiao.com</a>`,
          'Completed a 2,345km solo cycling journey across half of China while maintaining my coding career.'
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
