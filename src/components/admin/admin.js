import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { 
  Col,
  ListGroup, 
  Row
} from 'reactstrap'
import User from '../common/user'
import DeleteButton from '../common/deletebutton'

class Admin extends Component {
  componentWillMount() {
    this.props.getUsers()
  }
  render() {
    if (!this.props.admin) {
      return <Redirect to="/search" />
    }
    return (
      <div className="">
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <ListGroup flush>
              { this.props.users.map((user, index) => (
                <div>
                  <User key={index} user={user} />
                  <DeleteButton delete={(e) => this.props.delete(user.id)}/>
                </div>
              ))}
            </ListGroup>
          </Col>
          <Col xs="6" sm="4"></Col>
        </Row>
      </div>
    )
  }
}

export default Admin