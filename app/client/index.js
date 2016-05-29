require.ensure([], require => {
  require('utils/global');
  ReactDOM.render(require('./router').default, document.getElementById('app'));
}, 'client');
