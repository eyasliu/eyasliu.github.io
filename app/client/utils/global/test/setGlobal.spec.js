import setGlobal from '../setGlobal';

describe('setGlobal', () => {
  it('check window var', () => {
    const testObj = {isTest: true};
    setGlobal({testObj})
    window.testObj.should.be.eql(testObj)
  });

  it('set already exit var', () => {
    window.testObj = {isTest: true};
    setGlobal({
      testObj: {}
    })
    window.testObj.should.not.be.eql({})
  })
})