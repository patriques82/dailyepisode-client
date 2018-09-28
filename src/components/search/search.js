import './search.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Container,
  Col, 
  InputGroup, 
  InputGroupText, 
  InputGroupAddon, 
  Input, 
  Media,
  Progress,
  Row } from 'reactstrap'

class SubscriptionButton extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  handleMouseEnter(e) {
    this.setState({ active: true })
  }
  handleMouseLeave(e) {
    this.setState({ active: false })
  }
  render() {
    return (
      <div className="subscription-button-container" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} >
        <span className="subscribe-text-span">{this.state.active ? 'Subscribe' : 'OFF'}</span>
        <FontAwesomeIcon icon="check-circle" />
      </div>
    )
  }
}

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result-container">
        <Container>
          <Row>
            <Col xs="2">
              <Media>
                <Media left href="#">
                  <Media src="https://image.tmdb.org/t/p/w154/kCNl4QPstAqChFD0NnLpbDFG8ul.jpg" 
                        alt="Generic placeholder image" />
                </Media>
              </Media>
            </Col>
            <Col xs="8">
              <div>
                <h3>Maniac</h3> 
                <p>Two strangers are drawn to a mysterious pharmaceutical trial that will, 
                  they're assured, with no complications or side-effects whatsoever, solve 
                  all of their problems, permanently. Things do not go as planned.</p>
              </div>
            </Col>
            <Col xs="2">
              <Row>
                <SubscriptionButton />
              </Row>
              <Row>
                <div>
                  <h6>110 votes</h6>
                  <Progress value={50}>50%</Progress>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <div className="search-page">
        <div className="search-input-container">
          <div className="search-input-wrapper">
            <InputGroup>
              <Input placeholder="Search..."/>
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon="search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    )
  }
}

export default Search