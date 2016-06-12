const blog = (nextState, cb) => {
  require.ensure([], require => {
    cb(null, require('./').default)
  }, 'blog')
}

const list = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/List').default)
  }, 'blog-list')
}

const detail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Detail').default)
  }, 'blog-detail')
}

const search = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/Search').default)
  }, 'search')
}




const APPRouter = (
<Route path="/blog" getComponent={blog}>
  <Route path="list" getComponent={list}></Route>
  <Route path="star" getComponent={list}></Route>
  <Route path="tag/:tagname" getComponent={list}></Route>
  <Route path="search(/:keyword)" getComponent={search}></Route>
  <Route path="detail/:id" getComponent={detail}></Route>
  <IndexRedirect to="list" />
</Route>
);

export default APPRouter;
