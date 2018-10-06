import { connect } from 'react-redux'
import Header from './header'
import { actions as userActions } from '../../ducks/user'
import { actions as subscriptionActions } from '../../ducks/subscription'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(userActions.logout())
    dispatch(subscriptionActions.removeSubscriptions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)