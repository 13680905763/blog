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
        text: '首页',
        link: '/'
      },
      {
        text: '前端note',
        link: '/web/'
      },
      {
        text: '计算机知识',
        link: '/computer/'
      },
      {
        text: '关于生活',
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
              link: '/web/html-css/html/',
              children:[
                {
                  text: '什么是html',
                  link: '/web/html-css/html/什么是html.md'
                },
                
              ]
            },
            {
              text: 'CSS',
              link: '/web/html-css/css/'
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
          text: '概念',
          link: '/computer/concept.md'
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
            }
          ]
        }
      ]
    }
  })
})
