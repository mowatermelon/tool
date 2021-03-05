import { defineConfig } from 'dumi';

const repo = 'tool';

export default defineConfig({
  title: repo,
  favicon: 'https://avatars.githubusercontent.com/u/18508817?s=60&v=4',
  logo: 'https://avatars.githubusercontent.com/u/18508817?s=60&v=4',
  outputPath: 'dist',
  // mode: 'doc',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  // publicPath: `/${repo}/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/mowatermelon/tool/',
    },
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // locales:[['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
});
