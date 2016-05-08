import postConst from 'common/actions/post';

const initState = {
  data: [],
  param: {
    paged: 0
  }
}

export default function list(state = initState, action) {
  switch(action.type){
    case postConst.of('GetList'):
      return {
        ...state,
        data: action.data
      }
    default: 
      return state;
  }
}