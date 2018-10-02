import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as searchActions } from '../../ducks/search'
import Search from './search'

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  data: state.search.data,
})

const mapDispatchToProps = (dispatch) => ({
  search: (searchTerm) => dispatch(searchActions.search(searchTerm))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))