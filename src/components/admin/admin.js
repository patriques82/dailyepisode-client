import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { 
  Badge,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  UncontrolledCollapse
} from 'reactstrap'
import DeleteButton from '../common/deletebutton'

class Admin extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    notificationIntervalInDays: 0,
    isAdmin: false,
  }
  componentWillMount() {
    this.props.getUsers()
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
      let { errors, ...createUserRequest } = this.state
      this.props.create(createUserRequest)
    } else {
      this.setState({ errors })
    }
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
            <Button outline className="add-btn" color="secondary" id="toggler" block>
              Add user
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Form className="add-user-form" onSubmit={this.handleFormSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" 
                         id="email" 
                         placeholder="Email" 
                         onChange={ e => this.setState({ email: e.target.value }) }
                         value={this.state.email} />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text" 
                         id="username" 
                         placeholder="Username" 
                         onChange={ e => this.setState({ username: e.target.value }) }
                         value={this.state.username} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" 
                         id="password" 
                         placeholder="Password"
                         onChange={ e => this.setState({ password: e.target.value }) }
                         value={this.state.password} />
                </FormGroup>
                <FormGroup>
                  <Label for="notification-interval">Notification interval</Label>
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
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox"
                           onChange={ e => this.setState({ isAdmin: !this.state.isAdmin })} 
                           value={this.state.isAdmin} />
                    Admin
                  </Label>
                </FormGroup>
                <Button className="float-right">Create</Button>
              </Form>
            </UncontrolledCollapse>
            <ListGroup flush>
              { this.props.users.map((user, index) => (
                <ListGroupItem key={index}>
                  <div className="clearfix">
                    <ListGroupItemHeading className="user-name float-left" tag={Link} to={`/subscriptions/${user.id}`}>{user.username}</ListGroupItemHeading>
                    <DeleteButton delete={(e) => this.props.delete(user.id)}/>
                  </div>
                  <ListGroupItemText>
                    {user.email} <Badge color="primary">{user.nrOfSubscriptions}</Badge>
                  </ListGroupItemText>
                </ListGroupItem>
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