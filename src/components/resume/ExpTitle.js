import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  background: #333;
  color: #eee;
  width: fit-content;
  padding: 0.4rem 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 3rem;
  margin-left: -3rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 1rem 1rem;
    border-color: transparent transparent #333 transparent;
    background: none;
    left: 0;
    top: -1rem;
  }
`
const ExpTitle = (props) => <Container>{props.title}</Container>
export default ExpTitle
