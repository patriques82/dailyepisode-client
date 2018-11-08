import axios from 'axios';
import { Base64 } from 'js-base64'

export default {
  getUsers: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get('/api/user', {
      headers: { 'Authorization' : basicToken }
    })
  },
  getUser: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get('/api/user/me', {
      headers: { 'Authorization' : basicToken }
    })
  },
  createUser: (username, password, createAccountRequest) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.post('/admin/user', createAccountRequest, {
      headers: { 'Authorization' : basicToken }
    })
  },
  updateUser: (accountId, username, newUsername, notificationIntervalInDays, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    const data = {
      accountId,
      username: newUsername,
      notificationIntervalInDays,
    }
    return axios.put('/api/user/update', data, {
      headers: { 'Authorization': basicToken },
    })
  },
  changePassword: (accountId, username, password, newPassword) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    const data = {
      accountId,
      newPassword,
    }
    return axios.put('/api/user/change-password', data, {
      headers: { 'Authorization': basicToken },
    })
  },
  deleteUser: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.delete('/api/user', {
      headers: { 'Authorization': basicToken },
    })
  },
  deleteOtherUser: (username, password, accountId) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.delete('/admin/user/' + accountId, {
      headers: { 'Authorization': basicToken },
    })
  },
  getSubscriptions: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get('/api/subscription', {
      headers: { 'Authorization' : basicToken }
    })
  },
  getUserSubscriptions: (username, password, userId) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get('/api/subscription/' + userId, {
      headers: { 'Authorization' : basicToken }
    })
  },
  search: (searchTerm, page) => {
    return axios.get('/api/series/search/' + page + '?query=' + searchTerm)
  },
  subscribe: (username, password, subscriptionRequest) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.post('/api/subscription', subscriptionRequest, {
      headers: { 'Authorization' : basicToken }
    })
  },
  removeSubscription: (username, password, id) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.delete('/api/subscription/' + id, {
      headers: { 'Authorization' : basicToken }
    })
  }
}