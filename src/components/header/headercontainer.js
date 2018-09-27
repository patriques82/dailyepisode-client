import { connect } from 'react-redux'
import Header from './header'
import { actions as authenticationActions } from '../../ducks/authentication'

const mapStateToProps = (state) => ({
  authenticated: state.authentication.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authenticationActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)