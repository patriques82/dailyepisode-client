import './login.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { 
  Alert,
  Button,
  Col, 
  Form, 
  FormFeedback,
  FormGroup, 
  Input, 
  Row } from 'reactstrap'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {
      username: false,
      password: false,
    },
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    let errors = {}
    if (this.state.username === '') {
      errors["username"] = true
    }
    if (this.state.password === '') {
      errors["password"] = true
    }
    if (Object.keys(errors).length === 0) {
      let { errors, ...loginRequest } = this.state
      this.props.fetchUser(loginRequest);
    } else {
      this.setState({ errors })
    }
  }
  render() {
    if (this.props.authenticated) {
      return <Redirect to="/search" />
    }
    return (
      <div className="login-page">
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Alert color="danger" isOpen={ this.props.error !== null }>
              { this.props.error }
            </Alert> 
            <Form onSubmit={this.handleFormSubmit} >
              <FormGroup>
                <Input type="text" 
                       id="username" 
                       placeholder="Username" 
                       onChange={ e => this.setState({ username: e.target.value }) }
                       value={this.state.userName} 
                       invalid={ this.state.errors.username } />
                { this.state.errors.username && 
                  <FormFeedback>Username cannot be empty</FormFeedback> 
                }
              </FormGroup>
              <FormGroup>
                <Input type="password" 
                       id="password" 
                       placeholder="Password" 
                       onChange={ e => this.setState({ password: e.target.value }) }
                       value={this.state.password}
                       invalid={ this.state.errors["password"] } />
                { this.state.errors.password && 
                  <FormFeedback>Password cannot be empty</FormFeedback> 
                }
              </FormGroup>
              <div className="button-container">
                <Button outline color="secondary" type="submit">
                  Login
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

export default Login