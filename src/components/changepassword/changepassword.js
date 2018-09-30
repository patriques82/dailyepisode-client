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

class ChangePassword extends Component {
  state = {
    id: this.props.userData.id,
    username: this.props.userData.username,
    password: '',
    newPassword: '',
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.changePassword(this.state);
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