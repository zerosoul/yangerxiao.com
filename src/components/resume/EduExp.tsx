import type { ReactNode } from 'react'

type Props = {
  school: string
  title?: string
  period?: string[]
  achievements: string[]
  children?: ReactNode
}

export default function EduExp({
  school,
  title,
  period,
  achievements,
  children
}: Props) {
  return (
    <section className="mt-3 flex flex-col">
      <h3 className="my-0 mb-2 text-black">
        {school}
        {period && (
          <span className="relative ml-5 text-[0.6rem] italic font-normal leading-3 text-neutral-500 before:absolute before:-left-2 before:bottom-0 before:content-['('] after:absolute after:-right-2 after:bottom-0 after:content-[')']">
            {period.join(' - ')}
          </span>
        )}
      </h3>

      {title && <p className="m-0 mb-1 text-[0.7rem] leading-tight">{title}</p>}

      {achievements.length ? (
        <ul className="m-0 list-[square] list-inside p-0">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="pt-[0.2rem] leading-snug text-neutral-700 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      ) : null}

      {children}
    </section>
  )
}
