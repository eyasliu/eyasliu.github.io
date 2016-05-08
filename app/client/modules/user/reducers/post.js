import postConst from 'common/actions/post';

const initState = {
  param: {
    paged: 0
  },
  list: [],
  edit: {}
}

export default function post(state = initState, action){
  switch(action.type){
    case postConst.of('GetList'):
      return {
        ...state,
        list: [
          ...action.data
        ]
      }
    case postConst.of('Add'):
      state.list.push(action.data);
      return {
        ...state,
        list: [...state.list]
      }
    case postConst.of('Delete'):
      _.remove(state.list, item => item.id === action.id);
      return {
        ...state,
        list: [...state.list]
      }
    case postConst.of('GetDetail'):
    case postConst.of('UpdateEdit'):
      return {
        ...state,
        edit: action.data
      }
      
    default: 
      return state
  }
}