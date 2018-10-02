import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { 
  Col, 
  Button, 
  Form, 
  FormFeedback,
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
    usernameError: false,
  }
  isValid(username) {
    const usernameRegexp = new RegExp("^[a-z0-9_-]{3,15}")
    return usernameRegexp.test(username)
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    let usernameError = false
    if (!this.isValid(this.state.newUsername)) {
       usernameError = true
    }
    if (!usernameError) {
      let { usernameError, ...profileChangeRequest } = this.state
      this.props.updateUser(profileChangeRequest);
    } else {
      this.setState({ usernameError })
    }
  }
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
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
                       value={this.state.newUsername}
                       invalid={ this.state.usernameError } />
                <FormFeedback invalid={this.state.usernameError }>
                  Username must be between 3 and 15 chars, and consist of any lower, upper case character, digit, '-' or '_' only
                </FormFeedback>
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