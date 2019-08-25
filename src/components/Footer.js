import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
  text-align: center;
  transition: all 0.5s;
  .copyright,
  .powerby {
    letter-spacing: 2px;
    font-size: 0.6rem;
    opacity: 0.75;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: #999;
    a {
      margin: 0 0.4rem;
    }
  }

  &.body.is-article-visible {
    transform: scale(0.95);
    filter: blur(0.1rem);
    opacity: 0;
  }

  &.body.is-loading {
    opacity: 0;
  }
`

const Footer = props => (
  <Wrapper style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy;2015 - {new Date().getFullYear()} <i className="fa fa-heart" />
      tristan
    </p>
    <p className="powerby">
      Powerd by
      <a target="_blank" href="http://reactjs.org/">
        React.js
      </a>
      &
      <a target="_blank" href="https://www.gatsbyjs.org/">
        Gatsby.js
      </a>
    </p>
  </Wrapper>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
