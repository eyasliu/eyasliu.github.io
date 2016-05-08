import Loading from '../index';

describe('Loading component', () => {
  it('contains', () => {
    const wrap = shallow(<Loading name="ball-pulse" color="#666" />);
    expect(wrap.find('.loader-inner').children()).to.have.length(3);
  });
});