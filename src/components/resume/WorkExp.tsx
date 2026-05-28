import type { ReactNode } from 'react'

type Props = {
  company: ReactNode
  title?: string
  period?: string[]
  desc?: string
  duties: string[]
  stack?: string[]
  children?: ReactNode
}

export default function WorkExp({
  company,
  title,
  period,
  desc,
  duties,
  children
}: Props) {
  return (
    <section className="my-4 flex flex-col">
      <h3 className="my-0 mb-2 text-black [&_a]:underline">
        {company}
        {title && (
          <span className="ml-4 text-[0.6rem] italic text-neutral-500">
            {title}
          </span>
        )}
        {period && (
          <span className="ml-4 text-[0.6rem] italic text-neutral-500">
            {period.join(' - ')}
          </span>
        )}
      </h3>

      {desc && <p className="m-0 mb-1 text-[0.7rem] leading-tight">{desc}</p>}

      {duties.length ? (
        <ul className="m-0 list-none p-0">
          {duties.map((duty) => (
            <li
              key={duty}
              className="relative pt-1 pl-3 leading-snug text-neutral-700 before:absolute before:left-0 before:top-1 before:text-neutral-400 before:content-['-'] [&_a]:underline [&_em]:font-bold [&_em]:not-italic"
              dangerouslySetInnerHTML={{ __html: duty }}
            />
          ))}
        </ul>
      ) : null}

      {children}
    </section>
  )
}
