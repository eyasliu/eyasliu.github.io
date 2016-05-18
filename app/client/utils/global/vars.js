/**
 * Created by Eyas on 2016/4/17.
 */

import setGlobal from "./setGlobal";

import defaultConfig from 'root/config/config.client';
import utils from '../utily';
import db from '../db';
import DateFormat from '../DateFormat';
import request from '../request';

const config = {
  ...defaultConfig,
  repoUrl: `${defaultConfig.server}/repos/${defaultConfig.github.user}/${defaultConfig.github.repo}`,
  postUrl: `${defaultConfig.server}/repos/${defaultConfig.github.user}/${defaultConfig.github.repo}/issues`
}

setGlobal({
  config,
  utils,
  request,
  DateFormat,
  db
})