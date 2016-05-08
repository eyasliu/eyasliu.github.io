import local from './local';

module.exports = {
  host: '0.0.0.0',
  clientPort: 3000,
  server: 'http://localhost:8001/api',
  debug: true,
  devtool: true,
  defaultDevtoolOpen: true,
  defaultDevtoolPosition: 'right',  //['left', 'top', 'right', 'bottom']
  github: {
    user: 'eyasliu',
    blogRepo: 'blog'
  },
  ...local
};
