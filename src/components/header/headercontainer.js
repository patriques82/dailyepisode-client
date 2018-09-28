import { connect } from 'react-redux'
import Header from './header'
import { actions as userActions } from '../../ducks/user'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)