import './subscriptions.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Badge,
  Button,
  Container,
  Col, 
  Row } from 'reactstrap'
import VoteCount from '../common/votecount'
import Image from '../common/image'

class DeleteSubscriptionButton extends Component {
  state = { active: false }
  handleMouseEnter = (e) => {
    this.setState({ active: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ active: false })
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.delete(this.props.id)
  }
  render() {
    return (
      <Container className="subscribe-container"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave} 
                 onClick={this.handleClick}>
        <Button outline color="danger" className="delete-button">
          Delete { this.state.active && <FontAwesomeIcon icon="minus-circle" /> }
        </Button>
      </Container>
    )
  }
}

const Subscription = (props) => {
  let { 
    firstAirDate, 
    genres, 
    homepage,
    id,
    imageUrl,
    lastAirDate,
    name,
    numberOfEpisodes,
    numberOfSeasons,
    overview,
    voteAverage,
    voteCount
  } = props.subscription
  return (
    <div className="search-result-container">
      <Container>
        <Row>
          <Col xs="2">
            <Image url={imageUrl || "placeholder.png"} homepage={homepage} />
          </Col>
          <Col xs="8">
            <Container className="main-content-container">
              <h3 className="name-header">
                  <a className="name" href={homepage || "#"}>{ name || "No name" }</a>
                  <span className="airdate">({firstAirDate}</span> 
                  <span className="airdate separator">-</span>
                  <span className="airdate">{lastAirDate})</span>
              </h3> 
              <p className="overview">{overview || "No description"}</p>
              { genres.map((genre, index) => <Badge key={index} className="genre">{genre}</Badge>) }
            </Container>
          </Col>
          <Col xs="2">
            <Row>
              <DeleteSubscriptionButton delete={props.delete} id={id} />
            </Row>
            <Row>
              <VoteCount votes={voteCount} average={voteAverage*10} />
            </Row>
            <Row>
              <Container className="details-container">
                <p className="seasons-details">Seasons: {numberOfSeasons}</p>
                <p className="seasons-details">Episodes: {numberOfEpisodes}</p>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

class Subscriptions extends Component {
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.props.subscriptions
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        delete={this.props.delete}
                        subscription={subscription} />
        )) }
      </div>
    )
  }
}

export default Subscriptions