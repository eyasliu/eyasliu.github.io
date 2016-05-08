const constant = Constant('info');

const initState = {
  logo: 'http://gravatar.oschina.net/avatar/2498d1cac9d0a9859fc6bf8d09702180?s=100',
  siteName: 'EyasWeb',
  navbar: [
    {
      label: '首页',
      link: '/blog'
    }, {
      label: '博客',
      link: '/blog'
    }, {
      label: '关于我',
      link: '/blog/detail/1'
    }
  ]
}

export default function info(state = initState, action) {
  return state;
}