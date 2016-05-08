import { Route, IndexRedirect } from 'react-router';
import Admin from './';
import TabsRouter from './components/Tabs/router';

const APPRouter = (
<Route path="/admin" component={Admin}>
  {TabsRouter}
</Route>
);

export default APPRouter;
