import React from 'react'
import api from '../library/api'
import { toast } from 'react-toastify'
import { Failure } from '../components/common/toast'
import _ from 'lodash'

export const types = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
}

const DEFAULT_STATE = {
  loading: false,
  data: [],
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case types.GET_USERS_FAILURE:
      toast(<Failure message={action.payload} />)
      return {
        ...state,
        loading: false,
      } 
    case types.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: _.reject(state.data, (user) => user.id === action.payload),
      }
    case types.DELETE_USER_FAILURE:
      toast(<Failure message={action.payload} />)
      return {
        ...state,
        loading: false,
      } 
    default:
      return state
  }
}

export const actions = {
  getUsers() {
    return function (dispatch, getState) {
      dispatch({
        type: types.GET_USERS_REQUEST,
      })
      let { username, password, } = getState().user.data
      api.getUsers(username, password)
      .then(response => {
        dispatch({
          type: types.GET_USERS_SUCCESS,
          payload: response.data,
        })
      })
      .catch(err => {
        dispatch({
          type: types.GET_USERS_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  },
  removeSearchResults() {
    return {
      type: types.REMOVE_RESULTS,
    }
  },
  delete(accountId) {
    return function (dispatch, getState) {
      dispatch({
        type: types.DELETE_USER_REQUEST
      })
      let { username, password, } = getState().user.data
      api.deleteOtherUser(username, password, accountId)
      .then(response => {
        dispatch({
          type: types.DELETE_USER_SUCCESS,
          payload: accountId,
        })
      })
      .catch(err => {
        dispatch({
          type: types.DELETE_USER_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  }
}