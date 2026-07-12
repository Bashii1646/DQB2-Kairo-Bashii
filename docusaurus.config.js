// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DQB2 Kairo Bashii',
  tagline: 'ドラゴンクエストビルダーズ2 回路・ギミック集',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

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
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'DQB2 Kairo Bashii',

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '回路一覧',
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
                label: '回路一覧',
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

        copyright: `Copyright © ${new Date().getFullYear()} ばっしー`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;