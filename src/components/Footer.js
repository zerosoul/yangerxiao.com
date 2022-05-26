import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
  text-align: center;
  transition: all 0.5s;
  .copyright,
  .icp,
  .links {
    letter-spacing: 1px;
    font-size: 0.6rem;
    opacity: 0.75;
    margin-bottom: 0.5rem;
    /* text-transform: uppercase; */
    color: #ccc;
    a {
      margin: 0 0.2rem;
      padding-bottom: 2px;
      border-bottom: 1px solid #666;
      text-decoration: none;
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
`;

const Footer = (props) => (
  <Wrapper style={props.timeout ? { display: "none" } : {}}>
    <p className="copyright">&copy;2015 - {new Date().getFullYear()}</p>
    <p className="copyright">Created By Tristan With ♥️</p>
    <p className="links">
      <span className="title">友链：</span>
      <a target="_blank" href="https://www.nomadguide.cn">
        数字游民指南
      </a>
      <a target="_blank" href="https://eleduck.com/">
        电鸭
      </a>
      <a target="_blank" href="https://kalacloud.com">
        卡拉云低代码工具
      </a>
    </p>
    <p className="icp">
      <a target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
    </p>
  </Wrapper>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
