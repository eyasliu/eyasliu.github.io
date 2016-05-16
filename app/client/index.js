
require.ensure([], require => {
  require('utils/globalVar');
  const AppRouter = require('./router').default;
  ReactDOM.render(AppRouter, document.getElementById('app'));
}, 'common');
