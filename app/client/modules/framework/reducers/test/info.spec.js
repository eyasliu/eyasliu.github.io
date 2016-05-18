import reducer from '../info.js';

describe('Demo reducer', () => {
  it('inital state', () => {
    reducer(undefined, {})
    .should.be.eql({
      logo: 'http://gravatar.oschina.net/avatar/2498d1cac9d0a9859fc6bf8d09702180?s=100',
      siteName: 'Eyas',
      navbar: [
        {
          label: '首页',
          link: '/blog'
        }, {
          label: '博客',
          link: '/blog'
        }
      ]
    })
  })
})