import './search.css'
import React, { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Button,
  Container,
  Col, 
  Media,
  Progress,
  Row } from 'reactstrap'

const InactiveButton = (props) => (
  <Button disabled outline color="success">
    Subscribe <FontAwesomeIcon icon="check-circle" />
  </Button>
)

const ActiveButton = (props) => (
  <Button outline color={props.active ? "success" : "secondary"} className="active-button">
    Subscribe { props.active && <FontAwesomeIcon icon="check-circle" /> }
  </Button>
)

class SubscriptionButton extends Component {
  state = { active: false }
  handleMouseEnter = (e) => {
    this.setState({ active: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ active: false })
  }
  handleClick = (e) => {
    this.props.handleSubscribeClick(this.props.remoteId)
  }
  alreadySubscribed = () => {
    const foundSubscription = _.find(this.props.subscriptions, s => s.remoteId === this.props.remoteId)
    return typeof foundSubscription !== 'undefined'
  }
  render() {
    const alreadySubscribed = this.alreadySubscribed()
    return (
      <Container className="subscribe-container"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave} 
                 onClick={this.handleClick}>
        { alreadySubscribed ? <InactiveButton /> : <ActiveButton active={this.state.active} /> }
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
            <p>{props.series.overview || "No description"}</p>
          </div>
        </Col>
        <Col xs="2">
          <Row>
            <SubscriptionButton remoteId={props.series.remoteId} 
                                subscriptions={props.subscriptions}
                                handleSubscribeClick={props.handleSubscribeClick} />
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