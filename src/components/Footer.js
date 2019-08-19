import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy;2015 - 2018 <i className="fa fa-heart" /> tristan{' '}
    </p>
    <p className="powerby">
      Powerd by{' '}
      <a target="_blank" href="http://reactjs.org/">
        React.js
      </a>{' '}
      &{' '}
      <a target="_blank" href="https://www.gatsbyjs.org/">
        Gatsby.js
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
