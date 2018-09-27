import { connect } from 'react-redux'
import Header from './header'

const mapStateToProps = (state) => ({
  authenticated: state.authentication.authenticated,
})

export default connect(mapStateToProps, null)(Header)