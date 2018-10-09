import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { 
  Badge,
  Col,
  ListGroup, 
  ListGroupItem, 
  Row
} from 'reactstrap'
import api from '../../library/api'

const User = (props) => {
  let { id, username, nrOfSubscriptions, } = props.user
  return (
    <ListGroupItem tag={Link} to={`/subscriptions/${id}`}>
      {username} <Badge pill>{nrOfSubscriptions}</Badge>
    </ListGroupItem>
  )
}

class Social extends Component {
  state = { users: [] }
  componentWillMount() {
    let { username, password, } = this.props.userData
    api.getUsers(username, password)
    .then(response => {
      this.setState({ users: response.data }) 
    })
    .catch(error => {
     // do something       
    })
  }
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />
    }
    return (
      <div className="">
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <ListGroup>
              { this.state.users.map((user, index) => (
                <User key={index} user={user} />
              ))}
            </ListGroup>
          </Col>
          <Col xs="6" sm="4"></Col>
        </Row>
      </div>
    )
  }
}

export default Social
