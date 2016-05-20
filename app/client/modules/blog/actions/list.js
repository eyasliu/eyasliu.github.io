export function getTags(){
  return dispatch => {
    request
      .get(config.repoUrl + '/labels')
      .end((err, res) => {
        dispatch({
          type: 'UPDATE_SIDEBAR',
          name: 'tags',
          data: _.chain(res.body)
            .map(item => ({
              title: item.name,
              link: '/blog/tag/' + item.name
            }))
            .value()
        })
      })
  }
}
