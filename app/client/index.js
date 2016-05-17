require.ensure([], require => {
  require('utils/globalVar');
  ReactDOM.render(require('./router').default, document.getElementById('app'));
}, 'common');
