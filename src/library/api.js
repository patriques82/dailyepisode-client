import axios from 'axios';
import { Base64 } from 'js-base64'

const hostName = "http://localhost:8080"

export default {
  search: (searchTerm) => {
    return axios.get(hostName + '/api/series/search?query=' + searchTerm)
  },
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
}