import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Input, 
  Label,
  Row
} from 'reactstrap'
import { throws } from 'assert';

class ChangePassword extends Component {
  state = {
    id: this.props.userData.id,
    username: this.props.userData.username,
    password: '',
    newPassword: '',
    confirmPassword: '',
    errors: {},
  }
  isValid(password) {
    const regexp = new RegExp("^[a-zA-Z0-9_]*")
    return regexp.test(password)
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (this.state.password === '')
      errors["empty"] = "No password given"
    if (this.state.newPassword !== this.state.confirmPassword)
      errors["notEquals"] = "New password and confirm does not match"
    if (!this.isValid(this.state.newPassword))
      errors["invalid"] = "Invalid password: must be over 8 chars, and consist of any lower, upper case character or digit only"
    if (Object.keys(errors).length === 0) {
      let { confirmPassword, errors, ...passwordChangeRequest } = this.state
      this.props.changePassword(passwordChangeRequest)
    } 
    console.log(errors)
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
                <Label for="password">Password</Label>
                <Input type="password" 
                       id="password" 
                       onChange={ e => this.setState({ password: e.target.value }) }
                       value={this.state.password } />
              </FormGroup>
              <FormGroup>
                <Label for="new-password">New password</Label>
                <Input type="password" 
                       id="new-password" 
                       onChange={ e => this.setState({ newPassword: e.target.value }) }
                       value={this.state.newPassword } />
              </FormGroup>
              <FormGroup>
                <Label for="confirm-password">Confirm new password</Label>
                <Input type="password" 
                       id="confirm-password" 
                       onChange={ e => this.setState({ confirmPassword: e.target.value }) }
                       value={this.state.confirmPassword } />
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

export default ChangePassword