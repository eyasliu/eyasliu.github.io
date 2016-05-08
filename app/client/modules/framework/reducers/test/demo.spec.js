import reducer from '../demo';

describe('Demo reducer', () => {
  it('inital state', () => {
    reducer(undefined, {})
    .should.be.eql({
      isDemo: true
    })
  })
})