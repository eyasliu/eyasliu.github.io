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

export default createReducer(initState)({
  [postConst.of('ResetList')]: (state, action) => ({
    ...state,
    isOver: false,
    data: []
  }),
  [postConst.of('GetList')]: (state, action) => {
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
  },
  [postConst.of('GetByIds')]: (state, action) => ({
    ...state,
    isOver: !action.ids.length,
    data: [
      ...db('posts').value().filter(item => (action.ids.indexOf('' + item.number) > -1))
    ]
  }),
  [starConst.of('GetList')]: (state, action) => ({
    ...state,
    isOver: !action.data.length,
    data: action.data
  }),
  [starConst.of('ToggleStar')]: (state, action) => {
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
  },
  [postConst.of('GetComments')]: (state, action) => ({
    ...state,
    data: [..._.map(state.data, item => {
      if(item.number == action.id){
        item.comments = action.data
      }
      return item;
    })]
  })
})
