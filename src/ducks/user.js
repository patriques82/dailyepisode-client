import api from '../library/api'

export const types = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
  REMOVE_USER_DETAILS: 'REMOVE_USER_DETAILS',
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
        data: {},
        authenticated: false,
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
      .then(function (response) {
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
          payload: err.message,
        })
      })
    }
  },
  logout() {
    return {
      type: types.REMOVE_USER_DETAILS,
    }
  }
}