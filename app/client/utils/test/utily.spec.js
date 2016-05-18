import utils from '../utily';

describe('util functions', () => {
  it('setTitle', () => {
    const title = 'test title';
    utils.setTitle(title)
    document.title.should.be.eql(title)
  })
})