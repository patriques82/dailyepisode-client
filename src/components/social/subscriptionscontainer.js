import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as subscribeActions } from '../../ducks/subscription'
import Subscriptions from './subscriptions'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userSubscriptions: state.subscription.data,
  userData: state.user.data,
})

const mapDispatchToProps = (dispatch) => ({
  subscribe: (subscribeRequest) => dispatch(subscribeActions.subscribe(subscribeRequest)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subscriptions))