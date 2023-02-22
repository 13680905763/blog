import { defaultTheme, defineUserConfig } from 'vuepress'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '悲伤猪的博客',
  base: '/blog/',
  description: 'i am sadPig',
  theme: defaultTheme({
    logo: 'http://caibaojian.com/vuepress/hero.png',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'web-note',
        link: '/web/'
      },
      {
        text: 'computer',
        link: '/computer/'
      },

      {
        text: 'other',
        link: '/other/'
      },
      {
        text: 'Github',
        link: 'https://github.com/13680905763'
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/215917184954583'
      }
    ],
    sidebar: {
      '/web/': [
        {
          text: 'HTML&CSS',
          children: [
            {
              text: 'HTML',
              // link: '/web/html-css/html/',
              children: [
                {
                  text: 'hello-html',
                  link: '/web/html-css/html/html.md'
                },
                {
                  text: 'what is element',
                  link: '/web/html-css/html/element.md'
                },
                {
                  text: 'other',
                  link: '/web/html-css/html/other.md'
                }
              ]
            },
            {
              text: 'CSS',
              // link: '/web/html-css/css/',
              children: [
                {
                  text: 'hello-css',
                  link: '/web/html-css/css/css.md'
                },
                {
                  text: '常用属性',
                  link: '/web/html-css/css/常用属性.md'
                },
                {
                  text: 'CSS selectors',
                  link: '/web/html-css/css/selectors.md'
                },
                {
                  text: '继承-层叠-元素类型',
                  link: '/web/html-css/css/继承-层叠-元素类型.md'
                },
                {
                  text: 'layout',
                  link: '/web/html-css/css/layout.md'
                }
              ]
            }
          ]
        },
        {
          text: 'JavaScript',
          children: [
            {
              text: 'js基础',
              link: '/web/javascript/js基础/'
            },
            {
              text: 'js高级'
            }
          ]
        }
      ],
      '/computer/': [
        {
          text: 'data-structure'
          // link: '/computer/concept.md'
        },
        {
          text: 'algorithm'
          // link: '/computer/concept.md'
        },
        {
          text: 'git',
          link: '/computer/git.md'
        }
      ],

      '/other/': [
        {
          text: 'About life',
          children: [
            {
              text: 'Plan 2023',
              link: '/other/life/2023.md'
            }
          ]
        },
        {
          text: 'Recommend',
          children: [
            // {
            //   text: 'Google Extension',
            //   link: '/other/recommend/chrome.md'
            // },
            {
              text: 'VScode',
              link: '/other/recommend/vscode.md'
            },
            {
              text: 'Information',
              link: '/other/recommend/information.md'
            }
          ]
        }
      ]
    }
  })
})
