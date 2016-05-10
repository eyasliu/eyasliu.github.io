const constant = Constant('cm-post')

const {postUrl} = config;

/**
 * 请求数据
 * @param  {[type]}   name [description]
 * @param  {Function} url) [description]
 * @return {[type]}        [description]
 */
const requestData = function doRequest(url, cb = () => {}) {
  let requestCount = 0;
  (function req(){
    request
      .get(url)
      .end((err, res) => {
        if(!err){
          cb(res.body);
        } else {
          if(requestCount < 2) {
            requestCount++;
            req()
          }else{
            // cb([]);
          }
        }
      })
  })()
}

/**
 * 获取数据
 * @param  {string} name 表名
 * @param  {string} url 请求数据的url
 * @param  {obj} param 查询参数
 * @return {Promise}    查询结果
 */
const getData = (name, url) => param => {
  const listdata = db(name).value();
  if(listdata.length){
    requestData(url);
    return new Promise((resolve, reject) => {
      if(param){
        resolve(_.chain(db(name)).filter(param))
      }else{
        resolve(_.chain(db(name)))
      }
    });
  }

  return new Promise((resolve, reject) => {
    requestData(url, data => {
      db(name).replaceAll(data);
      if(param){
        resolve(_.chain(db(name)).filter(param))
      }else{
        resolve(_.chain(db(name)))
      }
    });
  });
}

// 文章
const getPostList = getData('posts', postUrl);
// 标签
const getLabels = getData('labels', config.repoUrl + '/labels')

/**
 * 侧边栏
 */
export function getSidebar(){
  return dispatch => {
    // 标签
    getLabels()
      .then(wrap => {
        dispatch({
          type: 'UPDATE_SIDEBAR',
          name: 'tags',
          data: wrap
            .map(item => ({
              title: item.name,
              link: '/blog/tag/' + item.name
            }))
            .value()
        })
      })
    // 最近文章
    getPostList()
      .then(wrap => {
        
        dispatch({
          type: 'UPDATE_SIDEBAR',
          name: 'latest_post',
          data: wrap
            .sortBy('updated_at', x => +new Date(x))
            .take(10)
            .map(item => ({
              title: item.title,
              link: '/blog/detail/' + item.number
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
    getPostList()
      .then(wrap => {
        let data = [];
        if(param.labels) {
          data = wrap.filter(item => _.find(item.labels, {name: param.labels})).value();
        } else {
          data = wrap.value();
        }
        dispatch({
          type: constant.GetList,
          param, 
          data
        })
      })
  }
}

export function getLatestPost(){
  return dispatch => {
    getPostList()
      .then(data => {
        dispatch({
          type: 'UPDATE_SIDEBAR',
          name: 'latest_post',
          data
        })
      })
  }
}

export function getListByLabel(labelname){
  return {
    type: constant.GetList,
    label: labelname,
    data: db('posts').find(item => item.labels.find(x => x.name == labelname))
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