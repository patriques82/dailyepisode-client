import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as searchActions } from '../../ducks/search'
import Search from './search'

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  data: state.search.data,
})

const mapDispatchToProps = (dispatch) => ({
  search: (searchRequest) => dispatch(searchActions.search(searchRequest))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))