import profile from '~/images/profile.png'

type ProfileInfo = {
  title?: string
  basic?: string
  blog?: string
  email?: string
  tel?: string
  github?: string
}

type Props = {
  en?: boolean
  name: string
  info: ProfileInfo
}

function getHostUrl(url: string) {
  const tmp = new URL(url)
  return `${tmp.host}${tmp.pathname === '/' ? '' : tmp.pathname}`
}

export default function Profile({ en = false, name, info }: Props) {
  const { title, basic, blog, email, tel, github } = info

  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="my-0 text-5xl font-bold tracking-tight text-black">
            {name}
          </h1>
          {title && <p className="my-0 text-sm">{title}</p>}
          <p className="my-0 text-sm">{basic}</p>
        </div>

        <div className="relative">
          <img
            className="h-44 w-44 rounded-full"
            src={profile}
            alt="简历头像"
          />
          <span className="absolute right-1 top-0 -z-10 rounded-2xl bg-neutral-800 px-[0.3rem] py-[0.2rem] text-[0.5rem] leading-none text-white">
            {en ? 'Remote' : '已离职'}
          </span>
        </div>

        <section className="flex flex-col items-end py-4 text-black">
          {github && (
            <ProfileItem title="GitHub">
              <a target="_blank" rel="noreferrer" href={github}>
                {getHostUrl(github)}
              </a>
            </ProfileItem>
          )}
          {blog && (
            <ProfileItem title={en ? 'Personal Site' : '个人站点'}>
              <a target="_blank" rel="noreferrer" href={blog}>
                {getHostUrl(blog)}
              </a>
            </ProfileItem>
          )}
          {email && (
            <ProfileItem title={en ? 'Email' : '邮箱'}>{email}</ProfileItem>
          )}
          {tel && (
            <ProfileItem title={en ? 'Mobile' : '电话'}>
              <a href={`tel:${tel}`}>{tel}</a>
            </ProfileItem>
          )}
        </section>
      </div>
    </section>
  )
}

function ProfileItem({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col items-end pr-2">
      <span className="text-xs text-neutral-400">{title}</span>
      <span className="font-extrabold">{children}</span>
    </div>
  )
}
