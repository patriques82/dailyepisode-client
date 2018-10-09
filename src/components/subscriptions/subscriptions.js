import './subscriptions.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import SubscriptionHOC from '../common/subscription'
import DeleteButton from '../common/deletebutton'

const Subscription = SubscriptionHOC(DeleteButton)

class Subscriptions extends Component {
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.props.subscriptions
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        delete={this.props.delete}
                        subscription={subscription} />
        )) }
      </div>
    )
  }
}

export default Subscriptions