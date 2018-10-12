import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as searchActions } from '../../ducks/search'
import { actions as subscribeActions } from '../../ducks/subscription'
import Search from './search'

const mapStateToProps = (state) => ({
  userId: state.user.data.id,
  subscriptions: state.subscription.data,
  searchData: state.search.data,
})

const mapDispatchToProps = (dispatch) => ({
  search: (searchRequest) => dispatch(searchActions.search(searchRequest)),
  subscribe: (subscribeRequest) => dispatch(subscribeActions.subscribe(subscribeRequest)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))