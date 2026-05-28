import { Github, Twitter } from 'lucide-react'
import avator from '~/images/avator.jpg'

type Props = {
  timeout: boolean
  onOpenArticle: (article: string) => void
}

export default function Header({ timeout, onOpenArticle }: Props) {
  return (
    <header id="header" style={timeout ? { display: 'none' } : undefined}>
      <img className="logo" src={avator} alt="logo" />
      <div className="content">
        <div className="inner">
          <h1>杨二</h1>
          <span className="slogan">Machine repeats</span>
          <br />
          <span className="slogan">Human creates</span>
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="//github.com/zerosoul"
              className="ico items-center justify-center text-white"
              aria-label="GitHub"
            >
              <Github className="size-5 text-white" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="//twitter.com/wsygc"
              className="ico items-center justify-center text-white"
              aria-label="Twitter"
            >
              <Twitter className="size-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onOpenArticle('about')
              }}
            >
              关于我
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="//blog.yangerxiao.com">
              博客
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="//works.yangerxiao.com">
              作品
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
