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
  handlePageClick = (searchTerm, page) => {
    this.props.search({ searchTerm, page })
  }
  render() {
    const data = this.props.data
    const emptyData = _.isEmpty(data)
    return (
      <div>
        <SearchForm handleFormSubmit={this.handleFormSubmit} />
        
        {!emptyData && data.results.map((series, index) => (
          <SearchResult key={index} series={series} />
        )) }

        {!emptyData &&
          <SearchPagination searchTerm={data.searchTerm} 
                            totalPages={data.totalPages}
                            page={data.page} 
                            handlePageClick={this.handlePageClick} />
        }
      </div>
    )
  }
}

export default Search