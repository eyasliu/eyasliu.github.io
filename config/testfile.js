var context = require.context('../app/client', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;