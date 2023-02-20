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
        text: 'life',
        link: '/life/'
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
              link: '/web/html-css/css/',
              children: [
                {
                  text: 'hello-css',
                  link: '/web/html-css/css/css.md'
                },
                {
                  text: '常用属性',
                  link: '/web/html-css/css/常用属性.md'
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
        }
      ],
      '/life/': [
        {
          text: '一些总结',
          children: [
            {
              text: '2023的计划',
              link: '/life/summarize/2023.md'
            }
          ]
        },
        {
          text: '其他',
          children: [
            {
              text: '谷歌插件推荐',
              link: '/life/other/chrome.md'
            },
            {
              text: 'vscode插件推荐',
              link: '/life/other/vscode.md'
            },
            {
              text: '文档',
              link: '/life/other/document.md'
            }
          ]
        }
      ]
    }
  })
})
