/**
 * Created by Eyas on 2016/4/17.
 */

import setGlobal from "./setGlobal";
import React from "react";
import ReactDOM from 'react-dom';
import compose from 'redux/lib/compose';
import bindActionCreators from 'redux-bind-action-groups';
import combineReducers from 'redux/lib/combineReducers';
import {connect} from 'react-redux';
import Constant from 'react-constant';
// import formToObj from 'form-to-obj';
import hashHistory from 'react-router/lib/hashHistory';
import _ from 'lodash';
// import defaultConfig from 'root/config/config.client';
import cx from 'classnames';
import marked from 'marked';
import createReducer from 'redux-create-reducer-curry';

import Link from "react-router/lib/Link";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

setGlobal({
  cx,
  // _,
  React,
  ReactDOM,
  Component: React.Component,
  PropTypes: React.PropTypes,
  connect,
  compose,
  combineReducers,
  bindActionCreators,
  Constant,
  RouterHistory: hashHistory,
  marked,
  createReducer,


  Link,
  Router,
  Route,
  IndexRedirect
})