import './login.css'
import React, { Component } from 'react'
import { 
  Button,
  Col, 
  Form, 
  FormGroup, 
  Input, 
  Row } from 'reactstrap'

const DEFAULT_STATE = {
  username: '',
  password: '',
}

class Login extends Component {
  state = {
    ...DEFAULT_STATE,
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state);
    this.setState(DEFAULT_STATE);
    this.props.history.push('/search')
  }
  render() {
    return (
      <div className="login-page">
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Form onSubmit={this.handleFormSubmit} >
              <FormGroup>
                <Input type="text" 
                       id="username" 
                       placeholder="Username" 
                       onChange={ e => this.setState({ username: e.target.value }) }
                       value={this.state.userName} />
              </FormGroup>
              <FormGroup>
                <Input type="password" 
                       id="password" 
                       placeholder="Password" 
                       onChange={ e => this.setState({ password: e.target.value }) }
                       value={this.state.password} />
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