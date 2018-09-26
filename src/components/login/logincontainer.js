import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actions as authenticationActions } from '../../ducks/authentication'
import Login from './login'

const mapStateToProps = (state) => ({
  loading: state.authentication.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userdata) => dispatch(authenticationActions.fetchUser(userdata)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
