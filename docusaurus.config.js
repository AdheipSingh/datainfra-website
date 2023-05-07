// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "DataInfra",
    tagline: "Control Planes for Real Time Analytics",
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
                href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap",
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
                    src: "img/logo-text.svg",
                },
                items: [
                    {
                        type: "dropdown",
                        // sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Products",
                        items: [
                            {
                                label: "Druid On Kubernetes",
                                to: "docs/druid-on-kubernetes/documentation",
                            },
                            {
                                label: "Pinot On Kubernetes",
                                to: "docs/pinot-on-kubernetes/documentation",
                            },
                            {
                                label: "Distributed sytem operator interface",
                                to: "docs/distributed-sytem-operator-interface/documentation",
                            },

                            {
                                label: "Operator runtime",
                                to: "docs/operator-runtime/documentation",
                            },
                        ],
                    },
                    {
                        to: "/documentation",
                        label: "Documentation",
                        position: "right",
                    },
                    {
                        href: "#contact",
                        label: "Contact",
                        position: "right",
                    },
                    { to: "/blog", label: "Blogs", position: "right" },
                    {
                        type: "html",
                        position: "right",
                        value: "<a class='navbar__item navbar__link navbar__link--active' style='height: 56px; width: 223px; background: #4361ee; border-radius: 40px; border: none; color: #fff; font-family: Montserrat; font-weight: 600; font-size: 1.25rem; display:flex; align-items: center; justify-content: center; text-decoration: none;'>Book Demo</a>",
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
        }),
}

module.exports = config
