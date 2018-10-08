import api from '../library/api'

export const types = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FAILURE: 'SEARCH_FAILURE',
  REMOVE_RESULTS: 'REMOVE_RESULTS',
}

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: null,
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case types.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      } 
    case types.REMOVE_RESULTS:
      return DEFAULT_STATE
    default:
      return state
  }
}

export const actions = {
  search({ searchTerm, page }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.SEARCH_REQUEST,
      })
      api.search(searchTerm, page)
      .then(response => {
        dispatch({
          type: types.SEARCH_SUCCESS,
          payload: { ...response.data, searchTerm }
        })
      })
      .catch(err => {
        dispatch({
          type: types.SEARCH_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  },
  removeSearchResults() {
    return {
      type: types.REMOVE_RESULTS,
    }
  }
}