import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as adminActions } from '../../ducks/admin'
import Admin from './admin'

const mapStateToProps = (state) => ({
  admin: state.user.data.admin,
  users: state.admin.data,
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(adminActions.getUsers())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))