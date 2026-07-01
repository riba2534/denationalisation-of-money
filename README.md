<div align="center">

# 货币的非国家化

### *Denationalisation of Money* · 中文精校版电子书

[![Website](https://img.shields.io/badge/在线阅读-free--money.fate.red-b8953f?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://free-money.fate.red)
[![VitePress](https://img.shields.io/badge/VitePress-1.6-646cff?style=for-the-badge&logo=Vite&logoColor=white)](https://vitepress.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/部署-Cloudflare%20Pages-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHubActions&logoColor=white)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/用途-学习交流-4a148c?style=for-the-badge)](#版权声明)

**[英] 弗里德里希·冯·哈耶克** 著　·　**姚中秋** 译

> 货币的非国家化，是阻止政府滥用权力、维护自由秩序的必要前提。
> —— F. A. Hayek

</div>

---

## 📖 关于本书

《货币的非国家化》是 1974 年诺贝尔经济学奖得主 **弗里德里希·冯·哈耶克**（Friedrich August von Hayek）晚年的重要著作。在这本书中，他颠覆性地提出了一个当时近乎离经叛道的命题：

> **政府垄断货币发行权，是一切通货膨胀与经济不稳定的根源。**

哈耶克主张，货币发行不应由国家垄断，而应交由私人银行在自由竞争中发行。市场机制会比任何政府机构更有效地约束货币发行者——一旦某家银行滥发货币，公众便会转而使用其他更稳定的货币，使其在竞争中被淘汰。这一构想对理解现代中央银行制度、加密货币与自由银行业具有持久的启发意义。

本书据新星出版社《货币的非国家化》（奥地利学派译丛）影印版进行 **OCR 精校**，制作为支持全文检索、脚注跳转、响应式排版的现代网页电子书。

## ✨ 特性

- 📚 **内容完整** — 正文 25 章、附录 4 篇、参考文献、讨论题及 1950–1975 年纸币贬值情况简表
- 🔍 **全文搜索** — 本地索引，全书关键词一键检索
- 📝 **脚注跳转** — 规范化脚注，支持点击引用与定义间互跳
- 🎨 **中文排版** — 衬线字体、首行缩进、舒适的行距与阅读宽度
- 📱 **响应式** — 桌面、平板、手机皆可流畅阅读
- 🌗 **深浅主题** — 一键切换，护眼长读
- 🚀 **全球 CDN** — Cloudflare Pages 边缘网络加速

## 🌐 在线阅读

**[free-money.fate.red](https://free-money.fate.red)**

## 📂 目录结构

```
denationalisation-of-money/
├── .vitepress/
│   ├── config.mts              # 站点配置（标题、侧边栏、搜索、脚注）
│   └── theme/
│       ├── index.ts             # 主题入口
│       └── custom.css           # 中文书籍排版样式
├── .github/workflows/
│   └── deploy.yml               # Cloudflare Pages 自动部署
├── chapters/                    # 章节内容（39 篇精校 Markdown）
│   ├── 00-翻译说明.md
│   ├── 07-第一章-现实的建议.md
│   ├── ...
│   └── images/                  # 正文插图
├── public/                      # 静态资源（封面、favicon）
├── index.md                     # 首页
├── package.json
└── pnpm-lock.yaml
```

侧边栏按 **前言 · 正文 · 附录** 三组组织：

| 分组 | 内容 |
|------|------|
| 前言 | 翻译说明、关于作者、各版前言、序言 |
| 正文 | 第一章 现实的建议 … 第二十五章 结语 |
| 附录 | 讨论题、纸币贬值简表、参考文献、附录一至四 |

## 🛠 本地开发

前置要求：[Node.js](https://nodejs.org/) 18+（CI 测试环境：Node 22）与 [pnpm](https://pnpm.io/) 10。

```bash
# 克隆仓库
git clone https://github.com/riba2534/denationalisation-of-money.git
cd denationalisation-of-money

# 安装依赖
pnpm install

# 启动本地开发服务器（默认 http://localhost:5173）
pnpm dev

# 构建生产版本（输出到 .vitepress/dist）
pnpm build

# 本地预览构建产物
pnpm preview
```

## 🚀 部署

推送到 `main` 分支即自动触发 [GitHub Actions](https://github.com/riba2534/denationalisation-of-money/actions) 工作流：安装依赖 → 构建站点 → 通过 `wrangler` 部署到 Cloudflare Pages。

所需 CI Secrets：

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token（需 Pages 编辑权限） |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

自定义域名 `free-money.fate.red` 通过 CNAME 指向 `free-money.pages.dev`，由 Cloudflare 自动签发 SSL 证书。

## 🧰 技术栈

| 技术 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev/) | Vue 驱动的静态文档生成器 |
| [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) | Markdown 脚注支持 |
| [pnpm](https://pnpm.io/) | 高效的包管理器 |
| [Cloudflare Pages](https://pages.cloudflare.com/) | 托管与全球 CDN |
| [GitHub Actions](https://github.com/features/actions) | 持续集成与部署 |

## 🙏 致谢

- **原著** — Friedrich August von Hayek
- **翻译** — 姚中秋
- **出版** — 新星出版社（奥地利学派译丛）

## ⚖️ 版权声明

本项目为个人学习研究用途的 OCR 精校电子书，仅供学术交流与阅读便利，不用于任何商业目的。原著及译本的著作权归原作者、译者及出版社所有。

如认为本项目侵犯了您的合法权益，请通过 [GitHub Issues](https://github.com/riba2534/denationalisation-of-money/issues) 联系，将在确认后及时删除。

---

<div align="center">

<sub>Built with ❤️ using VitePress · Deployed on Cloudflare Pages</sub>

</div>
