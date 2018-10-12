import React from 'react'
import api from '../library/api'
import { toast } from 'react-toastify'
import { Failure } from '../components/common/toast'
import _ from 'lodash'

export const types = {
  SUBSCRIBE_REQUEST: 'SUBSCRIBE_REQUEST',
  SUBSCRIBE_SUCCESS: 'SUBSCRIBE_SUCCESS',
  SUBSCRIBE_FAILURE: 'SUBSCRIBE_FAILURE',
  FETCH_SUBSCRIPTIONS_REQUEST: 'FETCH_SUBSCRIPTIONS_REQUEST',
  FETCH_SUBSCRIPTIONS_SUCCESS: 'FETCH_SUBSCRIPTIONS_SUCCESS',
  FETCH_SUBSCRIPTIONS_FAILURE: 'FETCH_SUBSCRIPTIONS_FAILURE',
  REMOVE_SUBCRIPTION_REQUEST: 'REMOVE_SUBSCRIPTION_REQUEST',
  REMOVE_SUBCRIPTION_SUCCESS: 'REMOVE_SUBSCRIPTION_SUCCESS',
  REMOVE_SUBCRIPTION_FAILURE: 'REMOVE_SUBSCRIPTION_FAILURE',
  REMOVE_SUBSCRIPTIONS: 'REMOVE_SUBSCRIPTIONS',
}

const DEFAULT_STATE = {
  loading: false,
  data: [],
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.SUBSCRIBE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      }
    case types.SUBSCRIBE_FAILURE:
      toast(<Failure message={action.payload} />)
      return {
        ...state,
        loading: false,
      }
    case types.FETCH_SUBSCRIPTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload]
      }
    case types.FETCH_SUBSCRIPTIONS_FAILURE:
      toast(<Failure message={action.payload} />)
      return {
        ...state,
        loading: false,
      }
    case types.REMOVE_SUBCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.REMOVE_SUBCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: _.reject(state.data, (sub) => sub.id === action.payload),
      }
    case types.REMOVE_SUBCRIPTION_FAILURE:
      toast(<Failure message={action.payload} />)
      return {
        ...state,
        loading: false,
      }
    case types.REMOVE_SUBSCRIPTIONS:
      return DEFAULT_STATE
    default:
      return state
  }
}

export const actions = {
  subscribe(remoteId) {
    return function (dispatch, getState) {
      let { id, username, password, } = getState().user.data
      dispatch({
        type: types.SUBSCRIBE_REQUEST,
      })
      api.subscribe(username, password, { accountId: id, remoteId })
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
  getSubscriptions({ username, password }) {
    return function (dispatch, getState) {
      dispatch({
        type: types.FETCH_SUBSCRIPTIONS_REQUEST,
      })
      api.getSubscriptions(username, password)
      .then(response => {
        dispatch({
          type: types.FETCH_SUBSCRIPTIONS_SUCCESS,
          payload: response.data,
        })
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_SUBSCRIPTIONS_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  },
  removeSubscription(id) {
    return function (dispatch, getState) {
      dispatch({
        type: types.REMOVE_SUBCRIPTION_REQUEST,
      })
      let { username, password, } = getState().user.data
      api.removeSubscription(username, password, id)
      .then(response => {
        dispatch({
          type: types.REMOVE_SUBCRIPTION_SUCCESS,
          payload: id,
        })
      })
      .catch(err => {
        dispatch({
          type: types.REMOVE_SUBCRIPTION_FAILURE,
          payload: "Something went wrong",
        })
      })
    }
  },
  removeSubscriptions() {
    return {
      type: types.REMOVE_SUBSCRIPTIONS,
    }
  }
}