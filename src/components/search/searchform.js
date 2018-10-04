import './search.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Button,
  Form,
  FormFeedback,
  InputGroup, 
  InputGroupAddon, 
  Input, 
} from 'reactstrap'

class SearchForm extends Component {
  state = {
    searchTerm: '',
    error: false,
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    if (this.state.searchTerm === '') {
      this.setState({ error: true })
    } else {
      this.props.handleFormSubmit(this.state.searchTerm)
    }
  }
  render() {
    return (
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
    )
  }
}

export default SearchForm