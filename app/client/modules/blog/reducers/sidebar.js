const initState = {
  list: [
    {
      id: 1,
      name:'latest_post',
      show: true,
      title: '最近更新',
      subtitle: 'Last Update',
      type: 'list',
      content: []
    }, {
      id: 2,
      name: 'tags',
      show: true,
      title: '标签云',
      subtitle: 'Tags Cloud',
      type: 'tags',
      content: []
    }, {
      id: 2,
      name: "introduct",
      show: true,
      title: '简介',
      subtitle: 'Intructor',
      type: 'text',
      content: '网址数据来源于 <a href="http://github.com/' + config.github.user + '/' + config.github.repo + '">github</a>'
    }
  ]
}

export default function sidebar(state = initState, action) {
  switch(action.type){
    case 'UPDATE_SIDEBAR':
    if(action.name){
      const block = _.find(state.list, item => item.name === action.name);
      block.content = action.data;
      return {
        ...state,
        list: [
          ...state.list
        ]
      }
    } else {
      return {
        ...state,
        list: [
          ...state.list,
          action.data
        ]
      }
    }
    default: 
      return state
  }
  return state;
}