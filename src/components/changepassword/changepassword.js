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

const DEFAULT_ERROR_STATE = {
  empty: false,
  notEquals: false,
  invalid: false,
}
class ChangePassword extends Component {
  state = {
    password: '',
    newPassword: '',
    confirmPassword: '',
    errors: DEFAULT_ERROR_STATE,
  }
  isValid(password) {
    const passwordRegexp = new RegExp("^[a-zA-Z0-9_]{6,}")
    return passwordRegexp.test(password)
  }
  handleFormSubmit = (e) => {
    this.setState({ errors: {} })
    e.preventDefault()
    let errors = {}
    if (this.state.password === '') {
      errors["empty"] = true
    }
    if (this.state.newPassword !== this.state.confirmPassword) {
      errors["notEquals"] = true
    }
    if (!this.isValid(this.state.newPassword)) {
      errors["invalid"] = true
    }
    if (Object.keys(errors).length === 0) {
      let { confirmPassword, errors, ...passwordChangeRequest } = this.state
      this.props.changePassword(passwordChangeRequest)
    } else {
      this.setState({ errors })
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
                <Label for="password">Password</Label>
                <Input type="password" 
                       id="password" 
                       onChange={ e => this.setState({ password: e.target.value }) }
                       value={ this.state.password } 
                       invalid={ this.state.errors["empty"] } />
                <FormFeedback invalid={this.state.errors["empty"]}>
                  Password cannot be empty
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="new-password">New password</Label>
                <Input type="password" 
                       id="new-password" 
                       onChange={ e => this.setState({ newPassword: e.target.value }) }
                       value={this.state.newPassword } 
                       invalid={this.state.errors["invalid"] } />
                <FormFeedback invalid={this.state.errors["invalid"]}>
                  Password must be over 8 chars, and consist of any lower, upper case character or digit only
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="confirm-password">Confirm new password</Label>
                <Input type="password" 
                       id="confirm-password" 
                       onChange={ e => this.setState({ confirmPassword: e.target.value }) }
                       value={this.state.confirmPassword }
                       invalid={this.state.errors["notEquals"] } />
                <FormFeedback invalid={this.state.errors["notEquals"]}>
                  Password and confirmation password does not match
                </FormFeedback>
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