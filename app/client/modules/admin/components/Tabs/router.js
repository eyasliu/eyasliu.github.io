import { Route, IndexRedirect, IndexRoute } from 'react-router';
import Tabs from '../Tabs';
import Info from '../Info';
import User from '../User';
import UserList from '../User/List';
import UserEdit from '../User/Edit';

const APPRouter = (
<Route component={Tabs}>
  <Route path="info" component={Info}></Route>
  <Route path="user" component={User}>
    <Route path="new" component={UserEdit}></Route>
    <IndexRoute component={UserList} />
  </Route>
  <IndexRedirect to="info"></IndexRedirect>
</Route>
);

export default APPRouter;
