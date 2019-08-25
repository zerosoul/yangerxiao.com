import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  .company {
    color:#000;
    margin-bottom: 0.5rem;
    margin-top:0;
  }
  .occupy {
    color:#000;
    margin-bottom: 0.6rem;
   
  }
  .period,
  .stack {
    position: relative;
    font-style: italic;
    font-size: 0.6rem;
    margin-left: 1rem;
    font-weight: normal;
        text-transform: inherit;
    &:before,
    &:after {
      position: absolute;
      bottom: 0;
    }
  }
  .period {
    &:before {
      content: '（';
      left: -0.7rem;
    }
    &:after {
      content: ')';
      right: -0.4rem;
    }
  }
  .stack {
    &:before {
      content: '[';
      left: -0.4rem;
    }
    &:after {
      content: ']';
      right: -0.4rem;
    }
  }
  .desc {
    margin-bottom: 0.4rem;
    margin-top:0;
    font-size: 0.8rem;
  }
  .duties {
    list-style-position: inside;
    list-style-type: square;
    padding: 0;
    margin: 0.5rem 0;
    margin-top: 0;
    .duty {
      color: #333;
      margin-bottom: 0.2rem;
      a {
        text-decoration: underline;
      }
    }
  }
`
const WorkExp = props => {
  const { company, title, duties, period, children, stack, desc } = props
  return (
    <Container>
      <h3 className="company">
        {company}
        {period && <span className="period">{period.join(' - ')}</span>}
      </h3>

      <h4 className="occupy">
        <span className="title" dangerouslySetInnerHTML={{ __html: title }} />
        {stack && <span className="stack">{stack.join('/')}</span>}
      </h4>
      {desc && <p className="desc"> {desc}</p>}
      <ul className="duties">
        {duties.map(duty => (
          <li
            key={duty}
            className="duty"
            dangerouslySetInnerHTML={{ __html: duty }}
          />
        ))}
      </ul>
      {children}
    </Container>
  )
}
export default WorkExp
