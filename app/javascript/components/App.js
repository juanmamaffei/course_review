import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div `

  border-radius: 12px;
  background-color: #7C3AED;
  width: 50%;
  height: 45vh;
  padding-top: 80px;
  text-align: center;
  // border: 6px solid #FBBF24;
  margin-left: 25%;
  margin-top: 25px;
  color: white;

`
const Button = styled.div `
  margin-left: 25%;
  margin-top: 25px;
  margin-right: 10px;
  background-color: #EF4444;
  min-height: 25px;
  width: 50%;
  padding: 12px;
  
  color: white;
  text-decoration: none;
  font-size: 18px;

  border-radius: 6px;

  &:hover{
    background-color: #D97706;
  }
  
`

const App = () => {
  return(<Container>
    <h1>Welcome, visitor 👋.</h1>
    <p>This is a sample tiny app built with Rails and React 💪.</p>
    <Link to="/courses"><Button>Enter</Button></Link>
    <a href="https://github.com/juanmamaffei/course_review"><Button>Repository</Button></a>
  </Container>)
}

export default App
