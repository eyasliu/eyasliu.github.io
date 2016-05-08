import { Route, IndexRoute } from 'react-router';
import Blog from './';
import List from './components/List';
import Search from './components/Search';
import Detail from './components/Detail';

const APPRouter = (
<Route path="/blog" component={Blog}>
  <Route path="list" component={List}></Route>
  <Route path="search" component={Search}></Route>
  <Route path="search/:keyword" component={Search}></Route>
  <Route path="detail/:id" component={Detail}></Route>
  <IndexRoute component={List} />
</Route>
);

export default APPRouter;
