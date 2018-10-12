import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import _ from 'lodash'
import api from '../../library/api'
import { Failure } from '../common/toast'
import Subscription from './subscription'

class Subscriptions extends Component {
  state = { subscriptions: [] }
  componentWillMount() {
    let { username, password, } = this.props.userData
    let { params: { userId }} = this.props.match
    api.getUserSubscriptions(username, password, userId)
    .then(response => {
      this.setState({ subscriptions: response.data })
    })
    .catch(error => {
      toast(<Failure message="Could not get user subscriptions"/>)
    })
  }
  handleSubscribeClick = (remoteId) => {
    let { id, } = this.props.userData
    this.props.subscribe({ accountId: id, remoteId })
  }
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.state.subscriptions
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        userSubscriptions={this.props.userSubscriptions}
                        handleSubscribeClick={this.handleSubscribeClick}
                        subscription={subscription} />
        )) }
      </div>
    )
  }
}

export default Subscriptions