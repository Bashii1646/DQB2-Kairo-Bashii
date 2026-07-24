// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ドラゴンクエストビルダーズ2 回路資料館',
  tagline: '水車・液体・マグマの検証と回路資料',
  favicon: 'img/logo.svg',

  url: 'https://bashii1646.github.io',
  baseUrl: '/DQB2-Kairo-Bashii/',

  organizationName: 'Bashii1646',
  projectName: 'DQB2-Kairo-Bashii',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },

        // ブログは使わない
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.svg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'ドラゴンクエストビルダーズ2 回路資料館',

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '記事一覧',
          },
          {
            href: 'https://github.com/Bashii1646/DQB2-Kairo-Bashii',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://x.com/Bashii1646',
            label: 'X',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',

        links: [
          {
            title: 'コンテンツ',
            items: [
              {
                label: '記事一覧',
                to: '/',
              },
            ],
          },
          {
            title: 'リンク',
            items: [
              {
                label: 'X',
                href: 'https://x.com/Bashii1646',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Bashii1646/DQB2-Kairo-Bashii',
              },
            ],
          },
        ],

        copyright: `ドラゴンクエストビルダーズ2 回路資料館｜Copyright © ${new Date().getFullYear()} ばっしー`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;