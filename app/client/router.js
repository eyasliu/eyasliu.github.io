// 应用总路由
// import {Router, Route, IndexRedirect} from 'react-router';

import Framework from 'framework';
import BlogRouter from 'blog/router';

const APPRouter = (
  <Router history={window.RouterHistory}>
    <Route path="/" component={Framework}>
      {BlogRouter}
      <IndexRedirect to="/blog" />
    </Route>
  </Router>
);

// const APPRouter = (
//   <Router history={window.RouterHistory} routes={{
//     path: '/',
//     component: require('framework').default,
//     indexRedirect: '/blog',
//     childRoutes: [
//       require('blog/router').default
//     ]
//   }} />
// )

export default APPRouter;
