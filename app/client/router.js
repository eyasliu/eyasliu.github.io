// 应用总路由
import {Router, Route, IndexRedirect} from 'react-router';

import Framework from 'framework';

import BlogRouter from 'blog/router';
import UserRouter from 'user/router';
import AdminRouter from 'admin/router';

const APPRouter = (
  <Router history={window.RouterHistory}>
    <Route path="/" component={Framework}>
      {BlogRouter}
      {UserRouter}
      {AdminRouter}
      <IndexRedirect to="/blog" />
    </Route>
  </Router>
);

export default APPRouter;
