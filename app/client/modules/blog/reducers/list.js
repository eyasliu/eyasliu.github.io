import postConst from 'common/actions/post';

const initState = {
  data: [],
  isOver: false,
  listParam: {
    paged: 0,
    labels: ''
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
      return {
        ...state,
        isOver: !action.data.length,
        data: action.data
      }
    default: 
      return state;
  }
}