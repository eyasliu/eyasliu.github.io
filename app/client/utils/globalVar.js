/**
 * Created by Eyas on 2016/4/17.
 */

import setGlobal from "./setGlobal";
import React from "react";
import ReactDOM from 'react-dom';
import {compose, combineReducers, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Constant from 'react-constant';
import formToObj from 'form-to-obj';
import request from './request';
import {browserHistory} from 'react-router';
import _ from 'lodash';

setGlobal({
  _,
  React,
  ReactDOM,
  Component: React.Component,
  PropTypes: React.PropTypes,
  connect,
  compose,
  combineReducers,
  bindActionCreators,
  Constant,
  request,
  formToObj,
  RouterHistory: browserHistory
})


require("./globalComponent");