import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { 
  Col,
  ListGroup, 
  Row
} from 'reactstrap'
import api from '../../library/api'
import { Failure } from '../common/toast'
import User from '../common/user'

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
      toast(<Failure message="Could not get users" />)
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
            <ListGroup flush>
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
