import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as subscriptionActions } from '../../ducks/subscription'
import { Subscriptions } from './subscriptions'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userSubscriptions: state.subscription.data,
})

const mapDispatchToProps = (dispatch) => ({
  delete: (id) => dispatch(subscriptionActions.removeSubscription(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subscriptions))