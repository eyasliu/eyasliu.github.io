import postConst from 'common/actions/post';
import starConst from 'common/actions/star';

const initState = {
  data: db('posts').value(),
  stars: db('stars').value(),
  isOver: false,
  listParam: {
    // labels: ''
  }
}

export default function list(state = initState, action) {
  switch(action.type){
    case postConst.of('ResetList'):
      return {
        ...state,
        isOver: false,
        data: []
      }
    case postConst.of('GetList'):
      const param = state.listParam;
      if(action.label){
        param.labels = action.label
      }
      return {
        ...state,
        isOver: !action.data.length,
        data: action.data,
        listParam: {
          ...param
        }
      }
    case starConst.of('GetList'):
      return {
        ...state,
        isOver: !action.data.length,
        data: action.data
      }
    case starConst.of('ToggleStar'):
      if(_.includes(state.stars, action.id)){
        db('stars').remove(item => item === action.id);
      }else{
        db('stars').push(action.id);
      }
      return {
        ...state,
        stars: [
          ...db('stars').value()
        ]
      }
    default: 
      return state;
  }
}