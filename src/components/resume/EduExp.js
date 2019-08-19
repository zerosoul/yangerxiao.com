import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  .edu {
    display: flex;
    dt {
      font-weight: 700;
    }
    dd {
      padding-left: 0.5rem;
      time {
        font-size: 0.6rem;
        font-weight: 200;
        padding-left: 0.3rem;
        font-style: italic;
      }
    }
  }
`
const EduExp = props => (
  <Container>
    <div className="edu">
      {props.school && <dt>{props.school}</dt>}
      {props.items && (
        <dd>
          {props.items.join('/')}
          {props.period && <time>{props.period.join(' - ')}</time>}
        </dd>
      )}
    </div>
    {props.children}
  </Container>
)
export default EduExp
