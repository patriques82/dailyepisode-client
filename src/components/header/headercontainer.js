import { connect } from 'react-redux'
import Header from './header'
import { actions as userActions } from '../../ducks/user'
import { actions as subscriptionActions } from '../../ducks/subscription'
import { actions as searchActions } from '../../ducks/search'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  admin: state.user.data.admin,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(userActions.logout())
    dispatch(subscriptionActions.removeSubscriptions())
    dispatch(searchActions.removeSearchResults())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)