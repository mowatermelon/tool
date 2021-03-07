import { defineConfig } from 'dumi';

const repo = 'tool';

export default defineConfig({
  title: repo,
  favicon: 'https://avatars.githubusercontent.com/u/18508817?s=60&v=4',
  logo: 'https://avatars.githubusercontent.com/u/18508817?s=60&v=4',
  outputPath: 'docs-dist',
  mode: 'doc',
  // mode: 'site',
  hash: true,
  base: `/`,
  publicPath: `/`,
  navs: {
    'en-US': [
      {
        title: 'feature',
        path: '/components',
      },
      { title: 'GitHub', path: 'https://github.com/mowatermelon/tool' },
      {
        title: 'Changelog',
        path: 'https://github.com/mowatermelon/tool/releases',
      },
    ],
    'zh-CN': [
      {
        title: '功能',
        path: '/components',
      },
      { title: 'GitHub', path: 'https://github.com/mowatermelon/tool' },
      {
        title: '更新日志',
        path: 'https://github.com/mowatermelon/tool/releases',
      },
    ],
  },
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    // '/base-tool': [
    //   {
    //     title: 'BaseTool',
    //     children: [
    //       // 菜单子项（可选）
    //       'BaseTool/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
    //     ],
    //   },
    // ],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // locales:[['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
