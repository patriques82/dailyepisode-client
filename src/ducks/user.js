import api from '../library/api'

export const types = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
  REMOVE_USER_DETAILS: 'REMOVE_USER_DETAILS',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
  UPDATE_PASSWORD_REQUEST: 'UPDATE_PASSWORD_REQUEST',
  UPDATE_PASSWORD_SUCCESS: 'UPDATE_PASSWORD_SUCCESS',
  UPDATE_PASSWORD_FAILURE: 'UPDATE_USER_FAILURE',
  REMOVE_USER_REQUEST: 'REMOVE_USER_REQUEST',
  REMOVE_USER_SUCCESS: 'REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILURE: 'REMOVE_USER_FAILURE',
}

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: null,
  authenticated: false,
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload.data,
          password: action.payload.password,
        },
        authenticated: true,
      }
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.REMOVE_USER_DETAILS:
      return {
        ...state,
        error: null,
        data: {},
        authenticated: false,
      }
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          username: action.payload.username,
          notificationIntervalInDays: action.payload.notificationIntervalInDays,
        },
      }
    case types.UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          password: action.payload,
        }
      }
    case types.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  login({ username, password }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.FETCH_USER_REQUEST,
      })
      api.getUser(username, password)
      .then(response => {
        dispatch({
          type: types.FETCH_USER_SUCCESS,
          payload: {
            data: response.data,
            password,
          }
        })
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_USER_FAILURE,
          payload: "Unauthorized user",
        })
      })
    }
  },
  update({ id, username, newUsername, notificationIntervalInDays, password }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.UPDATE_USER_REQUEST,
      })
      api.updateUser(id, username, newUsername, notificationIntervalInDays, password)
      .then(response => {
        dispatch({
          type: types.UPDATE_USER_SUCCESS,
          payload: {
            username: newUsername,
            notificationIntervalInDays,
          }
        })
      })
      .catch(err => {
        dispatch({
          type: types.UPDATE_USER_FAILURE,
          payload: "Failed updating user data",
        })
      })    
    }
  },
  changePassword({ id, username, password, newPassword }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.UPDATE_PASSWORD_REQUEST,
      })
      api.changePassword(id, username, password, newPassword)
      .then(response => {
        dispatch({
          type: types.UPDATE_PASSWORD_SUCCESS,
          payload: newPassword,
        })
      })
      .catch(err => {
        dispatch({
          type: types.UPDATE_PASSWORD_FAILURE,
          payload: "Failed updating password",
        })
      }) 
    }
  },
  logout() {
    return {
      type: types.REMOVE_USER_DETAILS,
    }
  },
  delete() {
    return function (dispatch, getState) {
      dispatch({
        type: types.REMOVE_USER_REQUEST,
      })
      let { username, password, } = getState().user.data
      api.deleteUser(username, password)
      .then(response => {
        dispatch({
          type: types.REMOVE_USER_SUCCESS,
        })
      })
      .catch(err => {
        dispatch({
          type: types.REMOVE_USER_FAILURE,
          payload: "Failed deleting account",
        })
      }) 
    }

  }
}