import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Badge,
  ListGroupItem, 
  ListGroupItemHeading,
  ListGroupItemText,
} from 'reactstrap'

const User = (props) => {
  let { id, username, email, nrOfSubscriptions, } = props.user
  return (
    <ListGroupItem>
      <ListGroupItemHeading tag={Link} to={`/subscriptions/${id}`}>{username}</ListGroupItemHeading>
      <ListGroupItemText>
        {email} <Badge color="primary">{nrOfSubscriptions}</Badge>
      </ListGroupItemText>
    </ListGroupItem>
  )
}

export default User