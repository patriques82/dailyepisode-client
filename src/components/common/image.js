import React from 'react'
import { Container, Media } from 'reactstrap'
import _ from 'lodash'

export default (props) => 
  <Container>
    <Media className="image">
      { !_.isUndefined(props.homepage) ?
       <a href={props.homepage} target="_blank"><Media src={props.url} alt="image" /></a> :
       <Media src={props.url} alt="image" />
      }
    </Media>
  </Container>