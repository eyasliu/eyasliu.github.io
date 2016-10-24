import postConst from 'common/actions/post';

const initState = {
  data: {},
  comments: []
}

export default createReducer(initState)({
  [postConst.of('GetDetail')]: (state, action) => ({
    ...state,
    data: action.data
  }),
  [postConst.of('GetComments')]: (state, action) => ({
    ...state,
    data: {
      ...state.data,
      comments: action.data
    },
    comments: action.data
  })
})

