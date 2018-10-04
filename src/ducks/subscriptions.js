import api from '../library/api'

export const types = {
  SUBSCRIBE_REQUEST: 'SUBSCRIBE_REQUEST',
  SUBSCRIBE_SUCCESS: 'SUBSCRIBE_SUCCESS',
  SUBSCRIBE_FAILURE: 'SUBSCRIBE_FAILURE',
}

const DEFAULT_STATE = {
  loading: false,
  subscriptions: [],
  error: null,
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptions: [...state.subscriptions, action.payload]
      }
    case types.SUBSCRIBE_FAILURE:
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
  subscribe(username, password, subscribeRequest) {
    return function (dispatch, getState) {
      dispatch({
        type: types.SUBSCRIBE_REQUEST,
      })
      api.subscribe(username, password, subscribeRequest)
      .then(response => {
        dispatch({
          type: types.SUBSCRIBE_SUCCESS,
          payload: response.data,
        })
      })
      .catch(err => {
        dispatch({
          type: types.SUBSCRIBE_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  },
}