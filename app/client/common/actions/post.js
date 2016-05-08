const constant = Constant('cm-post')

const postUrl = config.server + '/post';

export function getList(param){
  return dispatch => {
    request.get(postUrl)
      .send(param)
      .end((err, res) => {
        dispatch({
          type: constant.GetList,
          param,
          data: res.body
        })
      })
  }
}

export function getDetail(id){
  return dispatch => {
    request
      .get(postUrl + '/' + id)
      .send({id})
      .end((err, res) => {
        dispatch({
          type: constant.GetDetail,
          data: res.body
        })
      })
  }
}

export function add(data){
  return dispatch => {
    request
      .post(postUrl)
      .send(data)
      .end((err, res) => {
        dispatch({
          type: constant.Add,
          data
        })
      })
  }
}

export function update(id, data){
  return dispatch => {
    request
      .put(postUrl + '/' + id)
      .send(data)
      .end((err, res) => {
        dispatch({
          type: constant.Update,
          data, id
        })
      })
  }
}

export function del(id){
  return dispatch => {
    request
      .delete(postUrl + '/' + id)
      .end((err, res) => {
        if(res.body){
          dispatch({
            type: constant.Delete,
            id
          })
        }
      })
  }
}

export function updateEdit(data){
  return {
    type: constant.UpdateEdit,
    data
  }
}

export default constant;