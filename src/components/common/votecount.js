import React from 'react'
import { Container, Progress } from 'reactstrap'

export default (props) => 
  <Container>
    <h6>{props.votes} votes</h6>
    <Progress value={props.average}>
      {parseInt(props.average, 10)}%
    </Progress>
  </Container>