import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { actions as adminActions } from '../../ducks/admin'
import Admin from './admin'

const mapStateToProps = (state) => ({
  admin: state.user.data.admin,
  users: state.admin.data,
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(adminActions.getUsers()),
  create: (createUserRequest) => dispatch(adminActions.create(createUserRequest)),
  delete: (accountId) => dispatch(adminActions.delete(accountId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))