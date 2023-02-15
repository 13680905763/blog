module.exports = {
  title: '悲伤猪的博客',
  description: '...描述',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端知识',
        link: '/web/web.md'
      },
      {
        text: '计算机基础',
        link: '/computer/computer.md'
      },
      {
        text: '关于生活',
        link: '/life/life.md'
      },
      { text: 'Github', link: 'https://github.com/13680905763' },
      {
        text: '社区链接',
        items: [{ text: '掘金', link: 'https://juejin.cn/user/215917184954583' }]
      }
    ],
    sidebar: {
      '/web/': [
        {
          title: 'HTML&CSS',
          // path: '/',
          collapsable: false, // 不折叠
          children: [
            {
              title: 'html'
              // path: '/'
            }
          ]
        },
        {
          title: 'JavaScript',
          // path: '/handbook/ConditionalTypes',
          collapsable: false, // 不折叠
          children: [
            {
              title: 'js基础'
              // path: '/web/javascript/js基础/index.md'
            },
            {
              title: 'js高级'
              // path: '/web/javascript/js高级/index.md'
            }
          ]
        }
      ]
    },
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    }
  }
}
