import DateFormat from '../DateFormat';

describe('DateFormat function', () => {
  it('default formate', () => {
    const date = new Date('2016-05-06');
    const formated = DateFormat(date);
    formated.should.be.eql('2016-05-06')
  })


  it('assign formate', () => {
    const date = new Date('2016-05-06');
    const formated = DateFormat(date, 'yyyy-MM-dd');
    formated.should.be.eql('2016-05-06')
  })

  it('not date formate', () => {
    (() => {
      DateFormat('this is not date formate')
    }).should.throw('date must be an date formate')
  })
})