import axios from 'axios';
import { Base64 } from 'js-base64'

const hostName = "http://localhost:8080"

export default {
  getUser: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get(hostName + '/api/user/me', {
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
    return axios.put(hostName + '/api/user/update', data, {
      headers: { 'Authorization': basicToken },
    })
  },
  changePassword: (accountId, username, password, newPassword) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    const data = {
      accountId,
      newPassword,
    }
    return axios.put(hostName + '/api/user/change-password', data, {
      headers: { 'Authorization': basicToken },
    })
  },
  deleteUser: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.delete(hostName + '/api/user', {
      headers: { 'Authorization': basicToken },
    })
  },
  getSubscriptions: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get(hostName + '/api/subscription', {
      headers: { 'Authorization' : basicToken }
    })
  },
  search: (searchTerm, page) => {
    return axios.get(hostName + '/api/series/search/' + page + '?query=' + searchTerm)
  },
  subscribe: (username, password, subscriptionRequest) => {
    console.log(username, password, subscriptionRequest)
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.post(hostName + '/api/subscription', subscriptionRequest, {
      headers: { 'Authorization' : basicToken }
    })
  },
  removeSubscription: (username, password, id) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.delete(hostName + '/api/subscription/' + id, {
      headers: { 'Authorization' : basicToken }
    })
  }
}