import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import Social from './social'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  userData: state.user.data,
  userSubscriptions: state.subscription.data
})

export default withRouter(connect(mapStateToProps, null)(Social))