type Props = { timeout: boolean }

export default function Footer({ timeout }: Props) {
  return (
    <footer
      className="mt-8 w-full max-w-full text-center transition-all duration-500"
      style={timeout ? { display: 'none' } : undefined}
    >
      <p className="mb-2 text-[0.6rem] tracking-wider text-neutral-300 opacity-75">
        &copy;2015 - {new Date().getFullYear()}
      </p>
      <p className="mb-2 text-[0.6rem] tracking-wider text-neutral-300 opacity-75">
        Created By Tristan With ♥️
      </p>
      <p className="mb-2 text-[0.6rem] tracking-wider text-neutral-300 opacity-75">
        <span>友链：</span>
        <FooterLink href="https://www.nomadguide.cn">数字游民指南</FooterLink>
        <FooterLink href="https://eleduck.com/">电鸭</FooterLink>
      </p>
      <p className="mb-2 text-[0.6rem] tracking-wider text-neutral-300 opacity-75">
        <FooterLink href="http://www.beian.miit.gov.cn/">
          京ICP备16015459号-1
        </FooterLink>
      </p>
    </footer>
  )
}

function FooterLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="mx-1 border-b border-neutral-600 mr-2 no-underline"
    >
      {children}
    </a>
  )
}
