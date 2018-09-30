import { connect } from 'react-redux'
import { actions as userActions } from '../../ducks/user'
import { withRouter } from "react-router-dom"
import ChangePassword from './changepassword'

const mapStateToProps = (state) => ({
  userData: state.user.data,
  authenticated: state.user.authenticated,
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: (changePasswordRequest) => dispatch(userActions.changePassword(changePasswordRequest)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangePassword))