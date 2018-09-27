import { connect } from 'react-redux'
import { actions as authenticationActions } from '../../ducks/authentication'
import { withRouter } from "react-router-dom"
import Login from './login'

const mapStateToProps = (state) => ({
  loading: state.authentication.loading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userdata) => dispatch(authenticationActions.login(userdata)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
