import React from 'react'
import { 
  Badge,
  Container,
  Col, 
  Row } from 'reactstrap'
import VoteCount from '../common/votecount'
import Image from '../common/image'

const withButtonSubscription = (Button) => (props) => {
  let { 
    id,
    remoteId,
    firstAirDate, 
    genres, 
    homepage,
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
                  <a className="name" href={homepage || "#"} target="_blank">{ name || "No name" }</a>
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
              <Container className="subscribe-container">
                <Button id={id} 
                        delete={props.delete}
                        remoteId={remoteId} 
                        subscriptions={props.userSubscriptions}
                        handleSubscribeClick={props.handleSubscribeClick} />
              </Container>
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

export default withButtonSubscription