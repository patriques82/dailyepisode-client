import './search.css'
import React, { Component } from 'react'
import { 
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'

class SearchPagination extends Component {
  handlePageClick = (e, page) => {
    e.preventDefault()
    this.props.handlePageClick(this.props.searchTerm, page)
  }
  render() {
    return (
      <Container className="pagination-container">
        <Pagination size="sm" className="custom-pagination">

          {[...Array(this.props.totalPages)].map((x, index) => 
            <PaginationItem active={this.props.page === index + 1} key={index}>
              <PaginationLink onClick={ e => this.handlePageClick(e, index + 1) } >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          )} 

        </Pagination> 
      </Container>
    )
  }
}

export default SearchPagination