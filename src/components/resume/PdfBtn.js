import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  .btn {
    background: #333;
    color: #eee;
    border: none;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    text-decoration:none;
  }
  @media print {
    .btn {
      display: none;
    }
  }
`
export default class PdfBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      generating: false,
    }
  }
  render() {
    return (
      <Container>
        {/* <button onClick={this.handleClick}>{this.state.generating ? '正在生成...' : '获取PDF'}</button> */}
        <a
          className="btn"
          download="杨国春的简历.pdf"
          href="https://s.izhaichao.cn/puppeteer/pdf/resume.pdf"
        >
          获取PDF
        </a>
      </Container>
    )
  }
}
