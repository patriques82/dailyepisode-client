import React, { Component } from 'react'
import { 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Input, 
  Label,
  Row
} from 'reactstrap'

class Profile extends Component {
  state = {
    id: this.props.userData.id,
    username: this.props.userData.username,
    newUsername: this.props.userData.username,
    notificationIntervalInDays: this.props.userData.notificationIntervalInDays,
    password: this.props.userData.password,
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser(this.state);
  }
  render() {
    return (
      <div className="login-page">
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Form onSubmit={this.handleFormSubmit} >
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" 
                       id="username" 
                       onChange={ e => this.setState({ newUsername: e.target.value }) }
                       value={this.state.newUsername} />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" 
                       id="email" 
                       value={this.props.userData.email} 
                       disabled />
              </FormGroup>
              <FormGroup>
                <Label for="notification-interval">Notification interval in days</Label>
                <Input type="select" 
                       id="notification-interval"
                       onChange={ e => this.setState({ notificationIntervalInDays: e.target.value }) }
                       value={this.state.notificationIntervalInDays}>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </Input>
              </FormGroup>
              <div className="button-container">
                <Button outline color="secondary" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </Col>
          <Col sm="4"></Col>
        </Row>
      </div> 
    )
  }
}

export default Profile