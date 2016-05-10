import postConst from 'common/actions/post';

const initState = {
  data: [],
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
    default: 
      return state;
  }
}