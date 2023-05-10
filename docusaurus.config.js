// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "DataInfra",
    tagline: "Control Planes for Real-Time Analytics Infrastructure",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://datainfra-website.vercel.app/", // change to => https://datainfra-website.vercel.app/
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "DataInfra", // Usually your GitHub org/user name.
    projectName: "DataInfra", // Usually your repo name.

    onBrokenLinks: "throw",
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
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
                    alt: "DataInfra Logo",
                    src: "img/logo-only-white.svg",
                },
                items: [
                    {
                        type: "dropdown",
                        // sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "​",
                        className: "service-dropdown",
                        items: [
                            {
                                label: "Druid On Kubernetes",
                                to: "docs/druid-on-kubernetes",
                                className: "druid",
                            },
                            {
                                label: "Pinot On Kubernetes",
                                to: "docs/pinot-on-kubernetes",
                                className: "pinot",
                            },
                            {
                                label: "Distributed systems operator interface",
                                to: "docs/distributed-systems-operator-interface",
                                className: "dsoi",
                            },

                            {
                                label: "Operator runtime",
                                to: "docs/operator-runtime",
                                className: "operator",
                            },
                        ],
                    },
                    // {
                    //     to: "/documentation",
                    //     label: "Documentation",
                    //     position: "left",
                    // },
                    { to: "/blog", label: "Blogs", position: "right" },
                    {
                        to: "/",
                        label: "Home",
                        position: "right",
                        className: "navbar-home-link",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Stack Overflow",
                                href: "https://stackoverflow.com/questions/tagged/datainfra",
                            },
                            {
                                label: "Discord",
                                href: "https://discordapp.com/invite/docusaurus",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/docusaurus",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blogs",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: "YOUR_APP_ID",

                // Public API key: it is safe to commit it
                apiKey: "YOUR_SEARCH_API_KEY",

                indexName: "YOUR_INDEX_NAME",

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                externalUrlRegex: "external\\.com|domain\\.com",

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                replaceSearchResultPathname: {
                    from: "/docs/", // or as RegExp: /\/docs\//
                    to: "/",
                },

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: "search",

                //... other Algolia params
            },
        }),
}

module.exports = config
