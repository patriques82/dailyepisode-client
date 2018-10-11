import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import Subscriptions from './subscriptions'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userSubscriptions: state.subscription.data,
  userData: state.user.data,
})

export default withRouter(connect(mapStateToProps, null)(Subscriptions))