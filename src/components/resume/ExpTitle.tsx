type Props = { title: string }

export default function ExpTitle({ title }: Props) {
  return (
    <h1 className="relative mt-4 mb-2 w-fit bg-neutral-800 py-[0.4rem] pr-8 pl-12 -ml-12 text-neutral-200 before:absolute before:left-0 before:-top-4 before:block before:h-0 before:w-0 before:border-[0_0_1rem_1rem] before:border-solid before:border-transparent before:border-b-neutral-800 before:content-['']">
      {title}
    </h1>
  )
}
