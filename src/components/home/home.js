import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Home = (props) => {
  return (
    <div>
      <Jumbotron header className="text-center">
        <Container>
          <h1 className="display-3">Dailyepisode</h1>
          <p className="lead">
            Keep track of all your tv shows.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home