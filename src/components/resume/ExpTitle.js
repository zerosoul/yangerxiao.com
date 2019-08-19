import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  background: #333;
  color: #eee;
  width: fit-content;
  padding: 0.4rem 0.6rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`
const ExpTitle = props => <Container>{props.title}</Container>
export default ExpTitle
