// import { Route, IndexRoute, IndexRedirect } from 'react-router';
// import Blog from './';
// import List from './components/List';
// import Search from './components/Search';
// import Detail from './components/Detail';

const APPRouter = (
<Route path="/blog" component={require('react-router?name=blog!./')}>
  <Route path="list" component={require('react-router?name=blog-list!./components/List')}></Route>
  <Route path="tag/:tagname" component={require('react-router?name=blog-list!./components/List')}></Route>
  <Route path="search" component={require('react-router?name=search!./components/Search')}></Route>
  <Route path="search/:keyword" component={require('react-router?name=search!./components/Search')}></Route>
  <Route path="detail/:id" component={require('react-router?name=blog-detail!./components/Detail')}></Route>
  <IndexRedirect to="list" />
</Route>
);

export default APPRouter;
