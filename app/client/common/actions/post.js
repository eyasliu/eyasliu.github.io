const constant = Constant('cm-post')

const {postUrl} = config;

const getData = (name, url) => (cb = () => {}) => {
  const listdata = db(name).value();
  const count = listdata.length
  count && cb(null, listdata);

  request
    .get(url)
    .end((err, res) => {
      if(!err){
        db(name).replaceAll(res.body);
        (!count) && cb(null, res.body);
      } else {
        cb(err, null);
        getIssuesList();
      }
    })
}

const getPostList = getData('posts', postUrl);
const getLabels = getData('labels', config.repoUrl + '/labels')

export function getTags(){
  return dispatch => {
    getLabels((err, data) => {
      dispatch({
        type: 'UPDATE_SIDEBAR',
        name: 'tags',
        data: _.chain(data)
          .map(item => ({
            title: item.name,
            link: '/blog/tag/' + item.name
          }))
          .value()
      })
    })
  }
}


export function getList(param){
  return dispatch => {
    dispatch({
      type: constant.ResetList
    })
    getPostList((err, data) =>{
      if(!err){
        dispatch({
          type: constant.GetList,
          param,
          data: data
        })
        const latest = _.chain(data)
          .sortBy(item => +new Date(item.updated_at))
          .take(10)
          .map(item => ({
            title: item.title,
            link: '/blog/detail/' + item.number
          }))
        dispatch({
          type: 'UPDATE_SIDEBAR',
          name: 'latest_post',
          data: latest.value()
        })
      }
    });
  }
}

export function getDetail(id){
  return {
    type: constant.GetDetail,
    data: db('posts').find({number: parseInt(id)})
  }
  // return dispatch => {
  //   // const data = db('posts').find({number: id})
  //   dispatch({
  //     type: constant.GetDetail,
  //     data: db('posts').find({number: id}).value()
  //   })
    // request
    //   .get(postUrl + '/' + id)
    //   .send({id})
    //   .end((err, res) => {
    //     dispatch({
    //       type: constant.GetDetail,
    //       data: res.body
    //     })
    //   })
  // }
}

export function getComments(id){
  return dispatch => {
    request
      .get(postUrl + '/' + id + '/comments')
      .end((err, res) => {
        if(!err){
          dispatch({
            type: constant.GetComments,
            data: res.body
          })
        }
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