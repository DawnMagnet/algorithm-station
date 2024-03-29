// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '曙光磁铁的算法小站',
    tagline: 'Algorithm is cool-算法很酷',
    url: 'https://dawnmagnet.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DawnMagnet', // Usually your GitHub org/user name.
    projectName: 'algorithm-station', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/DawnMagnet/algorithm-station/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/DawnMagnet/algorithm-station/edit/main/website/blog/',
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
            navbar: {
                title: '曙光磁铁的算法小站',
                logo: {
                    alt: 'GEa Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'leetcode/intro',
                        position: 'left',
                        label: '力扣题解',
                    },
                    {
                        type: 'doc',
                        docId: 'codeforces/intro',
                        position: 'left',
                        label: 'codeforces题解',
                    },
                    {
                        type: 'doc',
                        docId: 'rcore/summary',
                        position: 'left',
                        label: 'rCore学习',
                    },
                    { to: '/blog', label: '博客', position: 'left' },
                    {
                        href: 'https://github.com/DawnMagnet/algorithm-station',
                        label: 'GitHub',
                        position: 'right',
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
                                label: 'Tutorial',
                                to: '/docs/leetcode/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/DawnMagnet/algorithm-station',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} DawnMagnet, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['rust']
            },
        }),
};

module.exports = config;
