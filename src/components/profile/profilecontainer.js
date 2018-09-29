import { connect } from 'react-redux'
import { actions as userActions } from '../../ducks/user'
import { withRouter } from "react-router-dom"
import Profile from './profile'

const mapStateToProps = (state) => ({
  userData: state.user.data,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userdata) => dispatch(userActions.update(userdata)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))