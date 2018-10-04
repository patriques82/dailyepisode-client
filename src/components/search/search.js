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
    let {id, username, password,} = this.props.userData
    this.props.subscribe(username, password, { accountId: id, remoteId })
  }
  handlePageClick = (searchTerm, page) => {
    this.props.search({ searchTerm, page })
  }
  render() {
    const searchData = this.props.searchData
    const emptyData = _.isEmpty(searchData)
    return (
      <div>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />
        
        {!emptyData && searchData.results.map((series, index) => (
          <SearchResult key={index} 
                        series={series} 
                        subscriptions={this.props.subscriptions}
                        handleSubscribeClick={this.handleSubscribeClick} />
        )) }

        {!emptyData &&
          <SearchPagination searchTerm={searchData.searchTerm} 
                            totalPages={searchData.totalPages}
                            page={searchData.page} 
                            handlePageClick={this.handlePageClick} />
        }
      </div>
    )
  }
}

export default Search