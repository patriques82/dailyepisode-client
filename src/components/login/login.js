import React, { Component } from 'react'
import styled from 'styled-components'
import { 
  Button,
  Col, 
  Form, 
  FormGroup, 
  Input, 
  Row } from 'reactstrap';

const LoginPage = styled.div`
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  float: right;
`;

const DEFAULT_STATE = {
  username: '',
  password: '',
};

class Login extends Component {
  state = {
    ...DEFAULT_STATE,
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.fetchUser(this.state);
    this.setState(DEFAULT_STATE);
  }
  render() {
    return (
      <LoginPage>
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
              <ButtonContainer>
                <Button outline color="secondary" type="submit">
                  Login
                </Button>
              </ButtonContainer>
            </Form>
          </Col>
          <Col sm="4"></Col>
        </Row>
      </LoginPage>
    )
  }
}

export default Login