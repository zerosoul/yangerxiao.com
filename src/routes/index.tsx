import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import Header from '~/components/Header'
import Main from '~/components/Main'
import Footer from '~/components/Footer'
import { siteMetadata } from '~/config/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: siteMetadata.title },
      { name: 'description', content: siteMetadata.description }
    ]
  }),
  component: IndexPage
})

function IndexPage() {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setTimeoutFlag] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(''), 100)
    return () => window.clearTimeout(id)
  }, [])

  const handleOpenArticle = (next: string) => {
    setIsArticleVisible((v) => !v)
    setArticle(next)
    window.setTimeout(() => setTimeoutFlag((v) => !v), 325)
    window.setTimeout(() => setArticleTimeout((v) => !v), 350)
  }

  const handleCloseArticle = () => {
    setArticleTimeout((v) => !v)
    window.setTimeout(() => setTimeoutFlag((v) => !v), 325)
    window.setTimeout(() => {
      setIsArticleVisible((v) => !v)
      setArticle('')
    }, 350)
  }

  return (
    <div
      className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}
    >
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
        <Main
          isArticleVisible={isArticleVisible}
          timeout={timeout}
          articleTimeout={articleTimeout}
          article={article}
          onCloseArticle={handleCloseArticle}
        />
        <Footer timeout={timeout} />
      </div>
      <div id="bg" />
    </div>
  )
}
