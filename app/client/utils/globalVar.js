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
import {hashHistory} from 'react-router';
import _ from 'lodash';
import defaultConfig from 'root/config/config.client';
import cx from 'classnames';
import marked from 'marked';
import utils from './utily';
import db from './db';
import DateFormat from './DateFormat'

const config = {
  ...defaultConfig,
  repoUrl: `${defaultConfig.server}/repos/${defaultConfig.github.user}/${defaultConfig.github.repo}`,
  postUrl: `${defaultConfig.server}/repos/${defaultConfig.github.user}/${defaultConfig.github.repo}/issues`
}

setGlobal({
  utils,
  config,
  cx,
  DateFormat,
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
  request,
  // formToObj,
  RouterHistory: hashHistory,
  marked,
  db
})


require("./globalComponent");