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
        text: 'programming',
        link: '/programming/'
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
                  text: 'element2',
                  link: '/web/html-css/html/element2.md'
                },
                {
                  text: 'html5-element',
                  link: '/web/html-css/html/html5-element.md'
                },
                {
                  text: 'other',
                  link: '/web/html-css/html/other.md'
                }
              ]
            },
            {
              text: 'CSS',
              children: [
                {
                  text: 'hello-css',
                  link: '/web/html-css/css/css.md'
                },
                {
                  text: 'css-property',
                  link: '/web/html-css/css/css-property.md'
                },
                {
                  text: 'font-text',
                  link: '/web/html-css/css/font-text.md'
                },
                {
                  text: 'background',
                  link: '/web/html-css/css/background.md'
                },
                {
                  text: 'other-property',
                  link: '/web/html-css/css/other-property.md'
                },
                {
                  text: 'selectors',
                  link: '/web/html-css/css/selectors.md'
                },
                {
                  text: 'box-model',
                  link: '/web/html-css/css/box-model.md'
                },
                {
                  text: 'position',
                  link: '/web/html-css/css/position.md'
                },
                {
                  text: 'float',
                  link: '/web/html-css/css/float.md'
                },
                {
                  text: 'block-formatting-context',
                  link: '/web/html-css/css/block-formatting-context.md'
                },
                {
                  text: 'flex',
                  link: '/web/html-css/css/flex.md'
                },
                {
                  text: 'transition-animation',
                  link: '/web/html-css/css/transition-animation.md'
                },
                {
                  text: 'css-function',
                  link: '/web/html-css/css/css-function.md'
                },
                {
                  text: 'media',
                  link: '/web/html-css/css/media.md'
                },
                {
                  text: 'css-units',
                  link: '/web/html-css/css/css-units.md'
                },
                {
                  text: 'mobile-terminal-adaptation',
                  link: '/web/html-css/css/mobile-terminal-adaptation.md'
                }
              ]
            }
          ]
        },
        {
          text: 'JavaScript',
          children: [
            {
              text: 'js-base',
              // link: '/web/javascript/js-base/',
              children: [
                {
                  text: 'hello-js',
                  link: '/web/javascript/js-base/hello-js.md'
                },
                {
                  text: '变量-数据类型',
                  link: '/web/javascript/js-base/变量-数据类型.md'
                },
                {
                  text: '运算符',
                  link: '/web/javascript/js-base/运算符.md'
                },
                {
                  text: '分支-循环',
                  link: '/web/javascript/js-base/分支-循环.md'
                },
                {
                  text: 'function',
                  link: '/web/javascript/js-base/function.md'
                },
                {
                  text: 'object',
                  link: '/web/javascript/js-base/object.md'
                },
                {
                  text: 'event',
                  link: '/web/javascript/js-base/event.md'
                }
              ]
            },
            {
              text: 'js-advanced'
            }
          ]
        },
        {
          text: 'LESS',
          link: '/web/less/less.md'
        }
        // {
        //   text: 'browser',
        //   link: '/web/browser/browser.md'
        // }
      ],
      '/programming/': [
        // {
        //   text: 'data-structure'
        //   link: '/computer/concept.md'
        // },
        // {
        //   text: 'algorithm'
        //   link: '/computer/concept.md'
        // },
        {
          text: 'git',
          link: '/programming/git.md'
        }
        // {
        //   text: 'open-source-protocol',
        //   link: '/programming/open-source-protocol.md'
        // }
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
