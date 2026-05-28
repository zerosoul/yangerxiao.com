import { useEffect, useState } from 'react'
import 'gitalk/dist/gitalk.css'
// @ts-expect-error gitalk has no types
import GT from 'gitalk'

export default function Gitalk() {
  const [isProd] = useState(import.meta.env.PROD)

  useEffect(() => {
    if (!isProd) return
    const language =
      navigator.language === 'zh-CN' ? navigator.language : 'en'
    const gitalk = new GT({
      clientID: '5a4d6021f3275378ac13',
      clientSecret: '456d708e8bca721232b34624f52b0fdd73762603',
      repo: 'yangerxiao.com',
      owner: 'zerosoul',
      admin: ['zerosoul'],
      language,
      id: location.pathname,
      distractionFreeMode: false
    })
    gitalk.render('gitalk-container')
  }, [isProd])

  return isProd ? (
    <div id="gitalk-container" />
  ) : (
    <div className="mx-auto border border-neutral-200 p-4 text-center">
      开发环境不加载评论组件
    </div>
  )
}
