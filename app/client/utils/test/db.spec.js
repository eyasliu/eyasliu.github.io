import db from '../db';

describe('lowdb db Obj', () => {
  const data = [1, 2, 3, 4, 5, 6]
  beforeEach(() => {
    db('posts').replaceAll(data);
  })
  it('db default data', () => {
    db('posts').value().should.be.eql(data)
  });

  it('db replaceAll', () => {
    const testdata = [2, 3, 4, 5, 6, 7]
    db('posts').replaceAll(testdata);
    db('posts').value().should.be.eql(testdata)
  })

  it('db clearAll', () => {
    db('posts').clearAll();
    db('posts').value().should.be.eql([])
  })
})