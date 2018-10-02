import { connect } from 'react-redux'
import { actions as userActions } from '../../ducks/user'
import { withRouter } from "react-router-dom"
import Login from './login'

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  authenticated: state.user.authenticated,
  error: state.user.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userdata) => dispatch(userActions.login(userdata)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
