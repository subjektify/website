// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Subjektify',
  tagline: 'Decentralized applications development environment for professionals',
  favicon: 'img/favicon.ico',
  url: 'https://subjektify.dev',
  baseUrl: '/',

  organizationName: 'subjektify',
  projectName: 'dapp',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      announcementBar: {
        id: 'in_development',
        content: '🚧 Important Notice: Subjektify is currently under active development. We advise against using it for production purposes at this time. 🚧',
      },
      navbar: {
        title: 'Subjektify',
        logo: {
          alt: 'Subjektify Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/tools', label: 'Tools', position: 'left' },
          { to: '/docs/learn', label: 'Learn', position: 'left' },
          { to: '/docs/reference', label: 'Reference', position: 'left' },
          {
            type: 'dropdown', label: 'Resources', position: 'left', items: [
              { to: '/docs/release-notes', label: 'Release Notes' },
              { to: '/blog', label: 'Blog' },
              { href: 'https://www.youtube.com/@SubjektifyLabs', label: 'Videos' }
            ]
          },
          {
            href: 'https://github.com/subjektify',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Learn',
                to: '/docs/learn',
              },
              {
                label: 'Reference',
                to: '/docs/reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/subjekt',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/Subjektify/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/subjekt',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@SubjektifyLabs',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Blueprints',
                href: 'https://blueprints.subjektify.dev/',
              },
              {
                label: 'Plugins',
                href: 'https://plugins.subjektify.dev/',
              },
              {
                label: 'Subject Composer',
                href: 'https://composer.subjektify.dev/',
              },
              {
                label: 'Subject Universe',
                href: 'https://universe.subjektify.dev/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Release Notes',
                to: '/docs/release-notes',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/subjektify',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Subjektify Labs Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity']
      },
    }),
};

module.exports = config;
