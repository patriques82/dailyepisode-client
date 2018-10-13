import './search.css'
import React from 'react'
import { 
  Container,
  Col, 
  Row } from 'reactstrap'
import VoteCount from '../common/votecount'
import Image from '../common/image'
import SubscribeButton from '../common/subscribebutton'

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
            <Container className="subscribe-container">
              <SubscribeButton remoteId={props.series.remoteId} 
                               subscriptions={props.subscriptions}
                               handleSubscribeClick={props.handleSubscribeClick} />
            </Container>
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