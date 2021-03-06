import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Jumbotron, Container } from 'reactstrap'

const Home = (props) => {
  return (
    <div>
      <Jumbotron className="text-center white-background">
        <Container>
          <FontAwesomeIcon icon="tv" className="tv-main-icon"/>
          <h1 className="display-3">Dailyepisode</h1>
          <p className="lead">
            Keep track of all your tv shows. Get updates when new seasons are released.
          </p>
        </Container>
      </Jumbotron>
        <div className="progressbar-container">
          <ul className="progressbar">
            <li>Login</li>
            <li>Search tv-shows</li>
            <li>Subscribe</li>
            <li>Get notifications</li>
          </ul>
        </div>
    </div>
  )
}

export default Home