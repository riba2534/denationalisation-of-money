import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  lang: 'zh-CN',
  title: '货币的非国家化',
  description: '弗里德里希·冯·哈耶克 著 · 姚中秋 译 — 中文精校版电子书',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap',
        rel: 'stylesheet'
      }
    ],
    ['meta', { name: 'author', content: '弗里德里希·冯·哈耶克' }],
    ['meta', { property: 'og:title', content: '货币的非国家化' }],
    ['meta', { property: 'og:description', content: '哈耶克 著 · 姚中秋 译 — 中文精校版电子书' }],
    ['meta', { property: 'og:type', content: 'book' }]
  ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  themeConfig: {
    siteTitle: '货币的非国家化',
    outline: { level: [2, 3], label: '本章目录' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/riba2534/denationalisation-of-money' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: '前言',
        collapsed: false,
        items: [
          { text: '翻译说明', link: '/00-翻译说明' },
          { text: '关于作者', link: '/01-关于作者' },
          { text: '第三版前言', link: '/02-第三版前言' },
          { text: '第二版前言', link: '/03-第二版前言' },
          { text: '第二版说明', link: '/04-第二版说明' },
          { text: '前言', link: '/05-前言' },
          { text: '序言', link: '/06-序言' }
        ]
      },
      {
        text: '正文',
        collapsed: false,
        items: [
          { text: '第一章 现实的建议', link: '/07-第一章-现实的建议' },
          { text: '第二章 上述方案背后的原则之普遍化', link: '/08-第二章-上述方案背后的原则之普遍化' },
          { text: '第三章 政府垄断铸币的起源', link: '/09-第三章-政府垄断铸币的起源' },
          { text: '第四章 政府的垄断权一直在被滥用', link: '/10-第四章-政府的垄断权一直在被滥用' },
          { text: '第五章 法币的神秘色彩', link: '/11-第五章-法币的神秘色彩' },
          { text: '第六章 关于格雷欣法则的错误认识', link: '/12-第六章-关于格雷欣法则的错误认识' },
          { text: '第七章 并行货币及贸易性铸币的有限经验', link: '/13-第七章-并行货币及贸易性铸币的有限经验' },
          { text: '第八章 让私人发行的货币流通起来', link: '/14-第八章-让私人发行的货币流通起来' },
          { text: '第九章 发行不同货币的银行间的竞争', link: '/15-第九章-发行不同货币的银行间的竞争' },
          { text: '第十章 关于货币定义的一些题外话', link: '/16-第十章-关于货币定义的一些题外话' },
          { text: '第十一章 控制一种竞争性货币的价值的可能性', link: '/17-第十一章-控制一种竞争性货币的价值的可能性' },
          { text: '第十二章 公众将选择哪类货币？', link: '/18-第十二章-公众将选择哪类货币？' },
          { text: '第十三章 货币的哪种价值？', link: '/19-第十三章-货币的哪种价值？' },
          { text: '第十四章 货币数量论对于我们讨论的情形没有用处', link: '/20-第十四章-货币数量论对于我们讨论的情形没有用处' },
          { text: '第十五章 通货供应的可欲反应', link: '/21-第十五章-通货供应的可欲反应' },
          { text: '第十六章 自由银行业', link: '/22-第十六章-自由银行业' },
          { text: '第十七章 不再会有一般通货膨胀或通货紧缩？', link: '/23-第十七章-不再会有一般通货膨胀或通货紧缩？' },
          { text: '第十八章 货币政策既不是可欲的、也是不可能的', link: '/24-第十八章-货币政策既不是可欲的、也是不可能的' },
          { text: '第十九章 比固定汇率更好的纪律', link: '/25-第十九章-比固定汇率更好的纪律' },
          { text: '第二十章 应否会存在分立的通货区？', link: '/26-第二十章-应否会存在分立的通货区？' },
          { text: '第二十一章 对于政府财政与开支的影响', link: '/27-第二十一章-对于政府财政与开支的影响' },
          { text: '第二十二章 转轨的问题', link: '/28-第二十二章-转轨的问题' },
          { text: '第二十三章 防范国家', link: '/29-第二十三章-防范国家' },
          { text: '第二十四章 长远前景', link: '/30-第二十四章-长远前景' },
          { text: '第二十五章 结语', link: '/31-第二十五章-结语' }
        ]
      },
      {
        text: '附录',
        collapsed: false,
        items: [
          { text: '讨论题', link: '/32-讨论题' },
          { text: '1950年到1975年纸币贬值情况简表', link: '/33-1950年到1975年纸币贬值情况简表' },
          { text: '参考文献', link: '/34-参考文献' },
          { text: '附录一 货币的选择：终结通货膨胀之道', link: '/35-附录一-货币的选择：终结通货膨胀之道' },
          { text: '附录二 通往一种自由市场的货币体系', link: '/36-附录二-通往一种自由市场的货币体系' },
          { text: '附录三 未来的价值单位', link: '/37-附录三-未来的价值单位' },
          { text: '附录四 货币的市场本位', link: '/38-附录四-货币的市场本位' }
        ]
      }
    ]
  }
})
