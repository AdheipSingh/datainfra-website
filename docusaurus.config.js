// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "BaaZ",
    tagline: "Control Planes for SaaS Infrastructure",
    favicon: "img/logo-vector.png",

    // Set the production url of your site here
    url: "https://www.baaz.dev/", // change to => https://datainfra-website.vercel.app/
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    staticDirectories: ["static"],
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "BaaZ", // Usually your GitHub org/user name.
    projectName: "BaaZ", // Usually your repo name.

    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    // Google fonts
    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "canonical",
                href: "https://www.baaz.dev/",
            },
        },
        {
            tagName: "link",
            attributes: {
                "data-rh": "true",
                rel: "canonical",
                href: "https://www.baaz.dev/",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
            },
        },
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    blogSidebarCount: 0,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    postsPerPage: 21,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                // title: "DataInfra",
                logo: {
                    alt: "BaaZ Logo",
                    src: "img/logo-white.png",
                },
                items: [
                    // {
                    //     type: "dropdown",
                    //     // sidebarId: "tutorialSidebar",
                    //     position: "left",
                    //     label: "​",
                    //     className: "service-dropdown",
                    //     items: [
                    //         {
                    //             label: "Druid Kubernetes Operator",
                    //             to: "docs/druid-on-kubernetes",
                    //             className: "druid",
                    //         },
                    //         {
                    //             label: "Pinot Kubernetes Operator",
                    //             to: "docs/pinot-on-kubernetes",
                    //             className: "pinot",
                    //         },
                    //         {
                    //             label: "Distributed systems operator interface",
                    //             to: "docs/distributed-systems-operator-interface",
                    //             className: "dsoi",
                    //         },
                    //         {
                    //             label: "Operator runtime",
                    //             to: "docs/operator-runtime",
                    //             className: "operator",
                    //         },
                    //     ],
                    // },
                    {
                        to: "/#features",
                        label: "Features",
                        position: "right",
                    },
                    { to: "/blog", label: "Blogs", position: "right" },
                    {
                        to: "/",
                        label: "Home",
                        position: "right",
                        className: "navbar-home-link",
                    },
                ],
            },
            // footer: {
            //     style: "dark",
            //     links: [
            //         {
            //             title: "Docs",
            //             items: [
            //                 {
            //                     label: "Tutorial",
            //                     to: "/documentation",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "Community",
            //             items: [
            //                 {
            //                     label: "Stack Overflow",
            //                     href: "https://stackoverflow.com/questions/tagged/datainfra",
            //                 },
            //                 {
            //                     label: "Discord",
            //                     href: "https://discordapp.com/invite/docusaurus",
            //                 },
            //                 {
            //                     label: "Twitter",
            //                     href: "https://twitter.com/docusaurus",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "More",
            //             items: [
            //                 {
            //                     label: "Blogs",
            //                     to: "/blog",
            //                 },
            //                 {
            //                     label: "GitHub",
            //                     href: "https://github.com/facebook/docusaurus",
            //                 },
            //             ],
            //         },
            //     ],
            //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            // },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            // algolia: {
            //     // The application ID provided by Algolia
            //     appId: "YOUR_APP_ID",

            //     // Public API key: it is safe to commit it
            //     apiKey: "YOUR_SEARCH_API_KEY",

            //     indexName: "YOUR_INDEX_NAME",

            //     // Optional: see doc section below
            //     contextualSearch: true,

            //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            //     externalUrlRegex: "external\\.com|domain\\.com",

            //     // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            //     replaceSearchResultPathname: {
            //         from: "/docs/", // or as RegExp: /\/docs\//
            //         to: "/",
            //     },

            //     // Optional: Algolia search parameters
            //     searchParameters: {},

            //     // Optional: path for search page that enabled by default (`false` to disable it)
            //     searchPagePath: "search",

            //     //... other Algolia params
            // },

            metadata: [
                {
                    name: "google-site-verification",
                    content: "KLUSfWP6Co7sfLB1CVWQ8CgSnXxLNDtRNntqpchbKEA",
                },
            ],
        }),
}

module.exports = config
