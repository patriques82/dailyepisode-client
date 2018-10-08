import { connect } from 'react-redux'
import { actions as userActions } from '../../ducks/user'
import { actions as subscriptionActions } from '../../ducks/subscription'
import { actions as searchActions } from '../../ducks/search'
import { withRouter } from "react-router-dom"
import Profile from './profile'

const mapStateToProps = (state) => ({
  userData: state.user.data,
  authenticated: state.user.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userdata) => dispatch(userActions.update(userdata)),
  deleteUser: () => {
    dispatch(userActions.delete())
    dispatch(userActions.logout())
    dispatch(subscriptionActions.removeSubscriptions())
    dispatch(searchActions.removeSearchResults())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))