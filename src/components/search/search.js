import './search.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Button,
  Container,
  Col, 
  Form,
  FormFeedback,
  InputGroup, 
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

const SearchResult = (props) => (
  <div className="search-result-container">
    <Container>
      <Row>
        <Col xs="2">
          <Media>
            <Media left href="#">
              <Media src={props.series.imageUrl} alt="Generic placeholder image" />
            </Media>
          </Media>
        </Col>
        <Col xs="8">
          <div>
            <h3>{props.series.name}</h3> 
            <p>{props.series.overview}</p>
          </div>
        </Col>
        <Col xs="2">
          <Row>
            <SubscriptionButton />
          </Row>
          <Row>
            <div>
              <h6>{props.series.voteCount}</h6>
              <Progress value={50}>{props.series.voteAverage}</Progress>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

class Search extends Component {
  state = {
    searchTerm: '',
    page: 1,
    error: false,
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchTerm === '') {
      this.setState({ error: true })
    } else {
      let { error, ...searchRequest } = this.state
      console.log(searchRequest)
      this.props.search(searchRequest)
    }
  }
  render() {
    console.log(this.props.data)
    return (
      <div className="search-page">
        <div className="search-input-container">
          <div className="search-input-wrapper">
          <Form onSubmit={this.handleFormSubmit}> 
            <InputGroup>
              <Input placeholder="Search..."
                     onChange={ e => this.setState({ searchTerm: e.target.value }) }
                     value={ this.state.searchTerm } 
                     invalid={ this.state.error } />
              <InputGroupAddon addonType="append">
                <Button>
                  <FontAwesomeIcon icon="search" />
                </Button>
              </InputGroupAddon>
              { this.state.error && 
                <FormFeedback>Search term is empty</FormFeedback> 
              }
            </InputGroup>
          </Form>
          </div>
        </div>
        { this.props.data.map((series, index) => (
          <SearchResult key={index} series={series} />
        )) }
      </div>
    )
  }
}

export default Search