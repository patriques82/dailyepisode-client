import './search.css'
import React, { Component } from 'react'
import _ from 'lodash'
import SearchForm from './searchform'
import SearchResult from './searchresult'
import SearchPagination from './searchpagination'

class Search extends Component {
  handleFormSubmit = (searchTerm) => {
    this.props.search({ searchTerm, page: 1 })
  }
  handleSubscribeClick = (remoteId) => {
    let { id, username, password, } = this.props.userData
    this.props.subscribe(username, password, { accountId: id, remoteId })
  }
  handlePageClick = (page) => {
    let { searchTerm, } = this.props.searchData
    this.props.search({ searchTerm, page })
  }
  render() {
    let { totalPages, page, results, } = this.props.searchData
    return (
      <div>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />
        
        {!_.isUndefined(results) &&
          results.map((series, index) => (
            <SearchResult key={index} 
                          series={series} 
                          subscriptions={this.props.subscriptions}
                          handleSubscribeClick={this.handleSubscribeClick} />
          ))
        }

        {!_.isUndefined(totalPages) && !_.isEmpty(results) &&
          <SearchPagination totalPages={totalPages}
                            currentPage={page} 
                            handlePageClick={this.handlePageClick} />
        }
      </div>
    )
  }
}

export default Search