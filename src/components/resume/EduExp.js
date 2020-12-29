import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  .school {
    color: #000;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  .period {
    color: #666;
    position: relative;
    font-style: italic;
    font-size: 0.6rem;
    margin-left: 1rem;
    font-weight: normal;
    line-height: 0.8rem;
    /* text-transform: none; */
    &:before,
    &:after {
      position: absolute;
      bottom: 0;
    }
  }
  .period {
    &:before {
      content: '(';
      left: -0.4rem;
    }
    &:after {
      content: ')';
      right: -0.4rem;
    }
  }
  .title {
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 0.7rem;
    line-height: 1.2;
  }
  .achievements {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    margin-top: 0;
    .achievement {
      color: #333;
      /* margin-bottom: 0.2rem; */
      position: relative;
      padding-left: 0;
      padding-top: 0.2rem;
      line-height: 1.3;
      a {
        text-decoration: underline;
      }
    }
  }
`
const EduExp = (props) => {
  const { school, title, achievements, period, children } = props

  return (
    <Container>
      <h3 className="school">
        {school}
        {period && <span className="period">{period.join(' - ')}</span>}
      </h3>

      {title && <p className="title"> {title}</p>}
      {achievements.length ? (
        <ul className="achievements">
          {achievements.map((achievement) => (
            <li
              key={achievement}
              className="achievement"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          ))}
        </ul>
      ) : null}
      {children}
    </Container>
  )
}
export default EduExp
