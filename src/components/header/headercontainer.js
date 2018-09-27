import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from './header'

const mapStateToProps = (state) => ({
  authenticated: state.authentication.authenticated,
})

export default withRouter(connect(mapStateToProps, null)(Header))