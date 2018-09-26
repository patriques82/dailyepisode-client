import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { 
  Container,
  Col, 
  InputGroup, 
  InputGroupText, 
  InputGroupAddon, 
  Input, 
  Media,
  Progress,
  Row } from 'reactstrap';

const SearchPage = styled.div`

`;

const SearchInputWrapper = styled.div`
  width: 35%;
  margin: auto;
`;

const SearchInputContainer = styled.div`
  padding: 50px 0;
`;

const SearchResultContainer = styled.div`
  margin: 30px 0;
`;

const SubscriptionButtonContainer = styled.div`
  margin-bottom: 16px;
`;

const SubscribeTextSpan = styled.span`
  padding-right: 5px;
`;

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
      <SubscriptionButtonContainer 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave} >
        <SubscribeTextSpan>{this.state.active ? 'Subscribe' : 'OFF'}</SubscribeTextSpan>
        <FontAwesomeIcon icon="check-circle" />
      </SubscriptionButtonContainer>
    )
  }
}

class SearchResult extends Component {
  render() {
    return (
      <SearchResultContainer>
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
      </SearchResultContainer>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <SearchPage>
        <SearchInputContainer>
          <SearchInputWrapper>
            <InputGroup>
              <Input placeholder="Search..."/>
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FontAwesomeIcon icon="search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </SearchInputWrapper>
        </SearchInputContainer>
          <SearchResult />
          <SearchResult />
          <SearchResult />
      </SearchPage>
    )
  }
}

export default Search