import './common.css'
import React from 'react'

export const Success = (props) => {
  return (
    <div className="success-toast">{props.message}</div>
  )
}

export const Failure = (props) => {
  return (
    <div className="error-toast">{props.message}</div>
  )
}