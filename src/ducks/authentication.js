import axios from 'axios';
import { Base64 } from 'js-base64'

export const types = {
  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',
};

const DEFAULT_STATE = {
  loading: false,
  data: {},
  error: null,
  password: null,
  authenticated: false,
};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        password: action.payload.password,
        authenticated: true,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const actions = {
  fetchUser({ username, password }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.FETCH_USER_REQUEST,
      });
      const basicToken = "Basic " + Base64.encode(username + ":" + password) 
      return axios.get('http://localhost:8080/api/user/me', {
        headers: { 'Authorization' : basicToken }
      })
      .then(function (response) {
        dispatch({
          type: types.FETCH_USER_SUCCESS,
          payload: {
            data: response.data,
            password,
          }
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_USER_FAILURE,
          payload: err.message,
        });
      });
    };
  },
};