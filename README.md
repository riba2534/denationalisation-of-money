# 货币的非国家化

> [英] 弗里德里希·冯·哈耶克 著　姚中秋 译

《货币的非国家化》（*Denationalisation of Money*）中文精校版电子书网站，基于 VitePress 构建，部署于 Cloudflare Pages。

哈耶克在本书中颠覆性地提出：**货币发行权不应由国家垄断**，而应交由私人银行在竞争中自由发行，通过市场机制约束通货膨胀。本书是奥地利学派的经典之作。

## 在线阅读

🌐 **[free-money.fate.red](https://free-money.fate.red)**

## 内容来源

- 据新星出版社《货币的非国家化》（奥地利学派译丛）影印版 OCR 精校
- 含正文 25 章、附录 4 篇、参考文献、讨论题及 1950–1975 年纸币贬值情况简表
- 全书脚注已规范化处理，支持点击跳转

## 目录结构

```
denationalisation-of-money/
├── .vitepress/
│   ├── config.mts          # 站点配置（标题、侧边栏、搜索、脚注）
│   └── theme/
│       ├── index.ts         # 主题入口
│       └── custom.css       # 中文排版样式
├── .github/workflows/
│   └── deploy.yml           # Cloudflare Pages 自动部署
├── chapters/                # 章节内容（39 篇精校 Markdown）
│   ├── 00-翻译说明.md
│   ├── 07-第一章-现实的建议.md
│   ├── ...
│   └── images/              # 正文插图
├── public/                  # 静态资源（封面、favicon）
├── index.md                 # 首页
└── package.json
```

## 本地开发

需要 Node.js 18+。

```bash
# 安装依赖
npm install

# 启动本地开发服务器
npm run dev

# 构建生产版本（输出到 .vitepress/dist）
npm run build

# 本地预览构建产物
npm run preview
```

## 部署

推送到 `main` 分支即自动触发 GitHub Actions 部署到 Cloudflare Pages。

所需 CI Secrets：

| Secret | 说明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token（需 Pages 编辑权限） |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID |

自定义域名 `free-money.fate.red` 通过 CNAME 指向 `free-money.pages.dev`。

## 技术栈

- [VitePress](https://vitepress.dev/) — Vue 驱动的静态文档生成器
- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote) — 脚注支持
- [Cloudflare Pages](https://pages.cloudflare.com/) — 托管与全球 CDN
- [GitHub Actions](https://github.com/features/actions) — CI/CD

## 致谢

- 原著：Friedrich August von Hayek
- 翻译：姚中秋
- 出版：新星出版社（奥地利学派译丛）

## 版权声明

本项目为个人学习研究用途的 OCR 精校电子书，仅供学术交流。原著及译本著作权归原作者、译者及出版社所有。如认为本项目侵犯了您的权益，请联系删除。
