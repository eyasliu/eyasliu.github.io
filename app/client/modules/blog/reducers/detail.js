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
    comments: action.data
  })
})

