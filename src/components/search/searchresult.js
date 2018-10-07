import './search.css'
import React, { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Button,
  Container,
  Col, 
  Row } from 'reactstrap'
import VoteCount from '../common/votecount'
import Image from '../common/image'

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
    const predicate = subscription => subscription.remoteId === this.props.remoteId
    const foundSubscription = _.find(this.props.subscriptions, predicate) 
    return !_.isUndefined(foundSubscription)
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
          <Image url={props.series.imageUrl || "placeholder.png"} />
        </Col>
        <Col xs="8">
          <Container className="main-content-container">
            <h3 className="name-header">{props.series.name}</h3> 
            <p className="overview">{props.series.overview || "No description"}</p>
          </Container>
        </Col>
        <Col xs="2">
          <Row>
            <SubscriptionButton remoteId={props.series.remoteId} 
                                subscriptions={props.subscriptions}
                                handleSubscribeClick={props.handleSubscribeClick} />
          </Row>
          <Row>
            <VoteCount votes={props.series.count} average={props.series.voteAverage*10} />
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SearchResult