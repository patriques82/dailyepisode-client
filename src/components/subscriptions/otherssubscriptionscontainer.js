import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as subscriptionActions } from '../../ducks/subscription'
import { OthersSubscriptions } from './subscriptions'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userSubscriptions: state.subscription.data,
  userData: state.user.data,
})

const mapDispatchToProps = (dispatch) => ({
  subscribe: (remoteId) => dispatch(subscriptionActions.subscribe(remoteId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OthersSubscriptions))