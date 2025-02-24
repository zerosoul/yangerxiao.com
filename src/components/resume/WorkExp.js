import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  .company {
    color: #000;
    margin-bottom: 0.5rem;
    margin-top: 0;
    a {
      text-decoration: underline;
    }
  }
  .occupy {
    color: #000;
    margin-bottom: 0.6rem;
  }

  .period,
  .stack {
    color: #666;
    font-style: italic;
    font-size: 0.6rem;
    margin-left: 1rem;
    font-weight: normal;
    line-height: 0.8rem;
  }
  .desc {
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.2;
  }
  .duties {
    list-style: none;
    padding: 0;
    margin: 0;
    .duty {
      color: #333;
      /* margin-bottom: 0.2rem; */
      position: relative;
      padding-left: 0.8rem;
      padding-top: 0.3rem;
      line-height: 1.3;
      a {
        text-decoration: underline;
      }
      &:before {
        content: '-';
        color: #aaa;
        position: absolute;
        left: 0;
        top: 0.2rem;
      }
      em {
        font-style: normal;
        font-weight: bold;
      }
    }
  }
`
const WorkExp = (props) => {
  const { company, title, duties, period, children, stack, desc } = props
  return (
    <Container>
      <h3 className="company">
        {company}
        {period && <span className="period">{period.join(' - ')}</span>}
        {/* {stack && <span className="stack">{stack.join('/')}</span>} */}
      </h3>

      {desc && <p className="desc"> {desc}</p>}
      {duties.length ? (
        <ul className="duties">
          {duties.map((duty) => (
            <li
              key={duty}
              className="duty"
              dangerouslySetInnerHTML={{ __html: duty }}
            />
          ))}
        </ul>
      ) : null}
      {children}
    </Container>
  )
}
export default WorkExp
