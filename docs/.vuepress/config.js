import { defaultTheme, defineUserConfig } from 'vuepress'
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'yuhua的博客',
  base: '/blog/',
  description: 'i am yuhua',
  theme: defaultTheme({
    logo: '/img/logo.png',
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
          text: 'html&css',
          children: [
            {
              text: 'html',
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
              text: 'css',
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
          text: 'javascript',
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
                  text: 'operator',
                  link: '/web/javascript/js-base/operator.md'
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
                  text: '内置类',
                  link: '/web/javascript/js-base/内置类.md'
                },
                {
                  text: 'event',
                  link: '/web/javascript/js-base/event.md'
                },
                {
                  text: 'dom',
                  link: '/web/javascript/js-base/dom.md'
                },
                {
                  text: 'bom',
                  link: '/web/javascript/js-base/bom.md'
                },
                {
                  text: 'json',
                  link: '/web/javascript/js-base/json.md'
                },
                {
                  text: 'storage',
                  link: '/web/javascript/js-base/storage.md'
                }
              ]
            },
            {
              text: 'js-advanced',
              children: [
                {
                  text: 'this',
                  link: '/web/javascript/js-advanced/this.md'
                },
                {
                  text: '内存管理和闭包',
                  link: '/web/javascript/js-advanced/内存管理和闭包.md'
                },
                {
                  text: 'function',
                  link: '/web/javascript/js-advanced/function.md'
                },
                {
                  text: 'object',
                  link: '/web/javascript/js-advanced/object.md'
                },
                {
                  text: 'extends',
                  link: '/web/javascript/js-advanced/extends.md'
                },
                {
                  text: 'es6',
                  link: '/web/javascript/js-advanced/es6.md'
                },
                {
                  text: 'es7-es13',
                  link: '/web/javascript/js-advanced/es7-es13.md'
                },
                {
                  text: 'proxy-reflect',
                  link: '/web/javascript/js-advanced/proxy-reflect.md'
                },
                {
                  text: 'promise',
                  link: '/web/javascript/js-advanced/promise.md'
                },
                {
                  text: 'Iterator-Generator',
                  link: '/web/javascript/js-advanced/Iterator-Generator.md'
                }
              ]
            }
          ]
        },
        {
          text: 'typescript',
          children: [
            {
              text: '基础类型',
              link: '/web/typescript/基础类型.md'
            },
            {
              text: '语法细节',
              link: '/web/typescript/语法细节.md'
            },
            {
              text: '面向对象',
              link: '/web/typescript/面向对象.md'
            },
            {
              text: '泛型',
              link: '/web/typescript/泛型.md'
            },
            {
              text: '知识扩展',
              link: '/web/typescript/知识扩展.md'
            }
          ]
        },
        {
          text: 'less',
          link: '/web/less/less.md'
        },
        {
          text: 'browser',
          children: [
            {
              text: '从输入url到浏览器显示',
              link: '/web/browser/从输入url到浏览器显示.md'
            },
            {
              text: '',
              link: '/web/typescript/语法细节.md'
            }
          ]
          // link: '/web/browser/browser.md'
        }
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
