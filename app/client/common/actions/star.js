const constant = Constant('star');

export default constant;

export function getList(){
  const stars = db('stars').value();
  const data = db('posts').filter(item => _.includes(stars, item.number))
  return {
    type: constant.GetList,
    data
  }
}

export function toggleStar(id){
  return {
    type: constant.ToggleStar,
    id
  }
}