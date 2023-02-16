import { defaultTheme, defineUserConfig } from 'vuepress'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '悲伤猪的博客',
  description: 'i am sadPig',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端知识',
        link: '/web'
      },
      {
        text: '计算机基础',
        link: '/computer'
      },
      {
        text: '关于生活',
        link: '/life'
      },
      {
        text: 'Github',
        link: 'https://github.com/13680905763'
      },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/215917184954583'
      }
    ]
  })
})
