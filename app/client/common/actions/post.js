const constant = Constant('cm-post')

const {postUrl} = config;

/**
 * 获取数据
 * @param  {string}   url 请求url
 * @param  {Function} cb  请求完成回调
 */
const requestData = (url, cb = () => {}) => {
  let requestCount = 0;
  (function req(){
    request
      .get(url)
      .end((err, res) => {
        if(!err){
          cb(res.body);
        } else {
          if(requestCount < 2) {
            // 最多重复两次
            requestCount++;
            // req()
          }
          cb(null)
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
const getData = (name, url) => (param, id, detailUrl) => {
  // if(!url){
  //   url = detailUrl
  // }
  const listdata = db(name).value();
  if(listdata.length){
    requestData(url || detailUrl, data => {
      if(data){
        if(!url){
          db(name).remove({id})
          db(name).push({id, data})
        }else{
          db(name).replaceAll(data);
        }
      }
    });
    return new Promise((resolve, reject) => {
      if(param){
        resolve(_.chain(db(name)).filter(param))
      }else{
        resolve(_.chain(db(name)))
      }
    });
  }

  return new Promise((resolve, reject) => {
    requestData(url || detailUrl, data => {
      if(!url){
        db(name).remove({id})
        db(name).push({id, data})
      }else{
        db(name).replaceAll(data);
      }
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
// 评论
const getCommentsList = getData('comments')


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
            .sortBy(x => -new Date(x.updated_at))
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

/**
 * 获取列表
 * @param  {obj} param 过滤参数
 */
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

export function getPostByIds(ids){
  return {
    type: constant.GetByIds,
    ids
  }
}

/**
 * 详情
 * @param  {number} id 文章id
 */
export function getDetail(id){
  return dispatch => {
    getPostList()
      .then(wrap => {
        dispatch({
          type: constant.GetDetail,
          data: wrap.find({number: parseInt(id, 10)}).value()
        })
      })
  }
}

/**
 * 文章评论
 * @param  {number} id 文章ID
 */
export function getComments(id){
  return dispatch => {
    getCommentsList(null, id, postUrl + '/' + id + '/comments')
      .then(wrap => {
        dispatch({
          type: constant.GetComments,
          data: wrap.find({id}).value().data,
          id
        })
      })
  }
  // return dispatch => {
  //   request
  //     .get(postUrl + '/' + id + '/comments')
  //     .end((err, res) => {
  //       if(!err){
  //         dispatch({
  //           type: constant.GetComments,
  //           data: res.body
  //         })
  //       }
  //     })
  // }
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