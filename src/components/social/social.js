import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { 
  Badge,
  Col,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading,
  ListGroupItemText,
  Row
} from 'reactstrap'
import api from '../../library/api'

const User = (props) => {
  let { id, username, email, nrOfSubscriptions, } = props.user
  return (
    <ListGroupItem>
      <ListGroupItemHeading tag={Link} to={`/subscriptions/${id}`}>{username}</ListGroupItemHeading>
      <ListGroupItemText>
        {email} <Badge color="primary">{nrOfSubscriptions}</Badge>
      </ListGroupItemText>
    </ListGroupItem>
  )
}

class Social extends Component {
  state = { users: [] }
  componentWillMount() {
    let { id, username, password, } = this.props.userData
    api.getUsers(username, password)
    .then(response => {
      const users = response.data.filter(user => user.id !== id)
      this.setState({ users }) 
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
