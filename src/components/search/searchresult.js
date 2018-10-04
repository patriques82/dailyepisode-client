import './search.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Button,
  Container,
  Col, 
  Media,
  Progress,
  Row } from 'reactstrap'

class SubscriptionButton extends Component {
  state = { active: false }
  handleMouseEnter = (e) => {
    this.setState({ active: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ active: false })
  }
  render() {
    return (
      <Container className="subscribe-container"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave} >
        <Button outline color="secondary">
          Subscribe { this.state.active && <FontAwesomeIcon icon="check-circle" /> }
        </Button>
      </Container>
    )
  }
}

const SearchResult = (props) => (
  <div className="search-result-container">
    <Container>
      <Row>
        <Col xs="2">
          <Media>
            <Media left>
              <Media src={props.series.imageUrl || "placeholder.png"} alt="image" />
            </Media>
          </Media>
        </Col>
        <Col xs="8">
          <div>
            <h3>{props.series.name}</h3> 
            <p>{ props.series.overview || "No description" }</p>
          </div>
        </Col>
        <Col xs="2">
          <Row>
            <SubscriptionButton />
          </Row>
          <Row>
            <Container>
              <h6>{props.series.voteCount} votes</h6>
              <Progress value={props.series.voteAverage*10}>
                {parseInt(props.series.voteAverage*10, 10)}%
              </Progress>
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SearchResult