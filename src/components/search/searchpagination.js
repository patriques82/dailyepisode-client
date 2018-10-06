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
    this.props.handlePageClick(page)
  }
  render() {
    return (
      <Container className="pagination-container">
        <Pagination size="sm" className="custom-pagination">

          {[...Array(this.props.totalPages)].map((x, index) => {
            const page = index + 1
            return (
              <PaginationItem active={this.props.currentPage === page} key={index}>
                <PaginationLink onClick={ e => this.handlePageClick(e, page) } >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })} 

        </Pagination> 
      </Container>
    )
  }
}

export default SearchPagination