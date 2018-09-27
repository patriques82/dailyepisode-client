import axios from 'axios';
import { Base64 } from 'js-base64'

const hostName = "http://localhost:8080"

export default {
  getUser: (username, password) => {
    const basicToken = "Basic " + Base64.encode(username + ":" + password) 
    return axios.get(hostName + '/api/user/me', {
      headers: { 'Authorization' : basicToken }
    })
  }
}