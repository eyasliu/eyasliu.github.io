import { Route, IndexRedirect } from 'react-router';
import Blog from './';
import Post from './components/Post';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import PostList from './components/Post/List';
import PostEdit from './components/Post/Edit';

const APPRouter = (
<Route path="/user" component={Blog}>
  <Route path="signup" component={Signup} />
  <Route path="login" component={Login} />
  <Route path="post" component={Post}>
    <Route path="list" component={PostList}></Route>
    <Route path="new" component={PostEdit}></Route>
    <Route path="edit/:id" component={PostEdit}></Route>
    <IndexRedirect to="list" />
  </Route>
  <IndexRedirect to="post" />
</Route>
);

export default APPRouter;
