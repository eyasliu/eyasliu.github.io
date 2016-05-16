// 应用总路由
import {Router, Route, IndexRedirect} from 'react-router';

// import Framework from 'framework';
import BlogRouter from 'blog/router';

const APPRouter = (
  <Router history={window.RouterHistory}>
    <Route path="/" component={require('react-router?name=fw!framework')}>
      {BlogRouter}
      <IndexRedirect to="/blog" />
    </Route>
  </Router>
);

export default APPRouter;
