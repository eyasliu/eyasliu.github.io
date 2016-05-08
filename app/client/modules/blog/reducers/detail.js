import postConst from 'common/actions/post';

const initState = {
  data: {},
  comments: []
}

export default function detail(state = initState, action) {
  switch(action.type){
    case postConst.of('GetDetail'):
      return {
        ...state,
        data: action.data
      }
    case postConst.of('GetComments'):
      return {
        ...state,
        comments: action.data
      }
    default: 
      return state;
  }
}