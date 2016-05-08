const initState = {
  list: [
    {
      id: 1,
      show: true,
      title: '最近更新',
      subtitle: 'Last Update',
      type: 'list',
      content: [
        {
          title: 'This is my test Title 中文测试',
          link: '/blog',
        }, {
          title: 'This is my test Title 中文测试',
          link: '/blog',
        }, {
          title: 'This is my test Title 中文测试',
          link: '/blog',
        }, {
          title: 'This is my test Title 中文测试',
          link: '/blog',
        }, {
          title: 'This is my test Title 中文测试',
          link: '/blog',
        }
      ]
    }, {
      id: 2,
      show: true,
      title: '标签云',
      subtitle: 'Tags Cloud',
      type: 'tags',
      content: [
        {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }, {
          title: 'Tags N',
          link: '/blog',
        }
      ]
    }, {
      id: 2,
      show: true,
      title: '简介',
      subtitle: 'Intructor',
      type: 'text',
      content: 'this is a text'
    }
  ]
}

export default function sidebar(state = initState, action) {
  return state;
}