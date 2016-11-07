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
  ...(window.config || {})
}
config.repoUrl = `${config.server}/repos/${config.github.user}/${config.github.repo}`
config.postUrl = `${config.server}/repos/${config.github.user}/${config.github.repo}/issues`

setGlobal({
  utils,
  request,
  DateFormat,
  db
}, {
  config
})