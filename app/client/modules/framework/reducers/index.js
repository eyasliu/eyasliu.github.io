import info from './info';
import user from 'user/reducers';
import blog from 'blog/reducers';

export default combineReducers({
  info,
  blog,
  user
});