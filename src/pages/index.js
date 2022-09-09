import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import '../assets/style/main.css'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleOpenArticle = (article) => {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)
  }

  handleCloseArticle = () => {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)
  }

  render() {
    return (
      <div
        className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
      >
        <div id="wrapper">
          <Header
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
          />
          <Footer timeout={this.state.timeout} />
        </div>
        <div id="bg" />
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export function Head({ data }) {
  const {
    title,
    description
  } = data.site.siteMetadata
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  )
}