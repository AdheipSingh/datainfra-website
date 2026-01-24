// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "BaaZ - GPU Infrastructure Consulting",
    tagline: "Maximize GPU Utilization, Build AI Factories & Optimize AI Cloud Infrastructure",
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

    // Google fonts and SEO tags
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
        // Organization structured data
        {
            tagName: "script",
            attributes: {
                type: "application/ld+json",
            },
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "BaaZ",
                "url": "https://www.baaz.dev",
                "logo": "https://www.baaz.dev/img/logo-vector.png",
                "description": "GPU Infrastructure Consulting - We help companies maximize GPU utilization, build AI factories, and optimize AI cloud infrastructure.",
                "sameAs": [
                    "https://www.linkedin.com/company/baazhq",
                    "https://github.com/baazhq"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "url": "https://cal.com/baazhq"
                },
                "knowsAbout": [
                    "GPU Infrastructure",
                    "AI Cloud",
                    "Kubernetes",
                    "H100",
                    "A100",
                    "Distributed Training",
                    "GPU Optimization",
                    "InfiniBand",
                    "NVIDIA GPU Operator",
                    "RDMA",
                    "RoCE",
                    "GPUDirect",
                    "NCCL",
                    "Multus CNI",
                    "NVIDIA Network Operator",
                    "Bare Metal Kubernetes"
                ]
            }),
        },
        // WebSite structured data for sitelinks search
        {
            tagName: "script",
            attributes: {
                type: "application/ld+json",
            },
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "BaaZ",
                "url": "https://www.baaz.dev",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.baaz.dev/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }),
        },
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    showReadingTime: true,
                    blogSidebarCount: 0,
                    postsPerPage: 21,
                    blogTitle: "GPU Infrastructure Blog | BaaZ",
                    blogDescription: "Technical insights on GPU infrastructure, AI factories, distributed training, Kubernetes GPU operators, and cloud optimization from the BaaZ team.",
                    feedOptions: {
                        type: "all",
                        title: "BaaZ GPU Infrastructure Blog",
                        description: "Technical insights on GPU infrastructure, AI factories, and distributed training optimization.",
                        copyright: `Copyright ${new Date().getFullYear()} BaaZ`,
                    },
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: [
                        "/blog/tags/**",
                        "/blog/tags",
                        "/blog/archive",
                    ],
                    filename: "sitemap.xml",
                },
                gtag: {
                    trackingID: 'G-SE6ECS8M22',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Social card for link previews (OpenGraph/Twitter)
            // TODO: Replace with a proper 1200x630px social card image
            image: "img/baazLogo.png",
            // navbar: {
            //     title: "BaaZ",
            //     hideOnScroll: true,
            //     logo: {
            //         alt: "BaaZ Logo",
            //         src: "img/logo-white.png",
            //     },
            //     items: [
            //         // {
            //         //     type: "dropdown",
            //         //     // sidebarId: "tutorialSidebar",
            //         //     position: "left",
            //         //     label: "​",
            //         //     className: "service-dropdown",
            //         //     items: [
            //         //         {
            //         //             label: "Druid Kubernetes Operator",
            //         //             to: "docs/druid-on-kubernetes",
            //         //             className: "druid",
            //         //         },
            //         //         {
            //         //             label: "Pinot Kubernetes Operator",
            //         //             to: "docs/pinot-on-kubernetes",
            //         //             className: "pinot",
            //         //         },
            //         //         {
            //         //             label: "Distributed systems operator interface",
            //         //             to: "docs/distributed-systems-operator-interface",
            //         //             className: "dsoi",
            //         //         },
            //         //         {
            //         //             label: "Operator runtime",
            //         //             to: "docs/operator-runtime",
            //         //             className: "operator",
            //         //         },
            //         //     ],
            //         // },
            //         {
            //             to: "/#features",
            //             label: "Features",
            //             position: "right",
            //         },
            //         { to: "/blog", label: "Blogs", position: "right" },
            //         {
            //             to: "/",
            //             label: "Home",
            //             position: "right",
            //             className: "navbar-home-link",
            //         },
            //     ],
            // },
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
                    content: "F-amoPl8NKGeeJ6Si2xDPtfin2HE6TR9mbIYKKedFDw",
                },
                {
                    name: "description",
                    content: "BaaZ helps companies maximize GPU utilization, build AI factories, and ship AI faster. Expert GPU infrastructure consulting for H100, A100, and enterprise AI cloud.",
                },
                {
                    name: "keywords",
                    content: "GPU consulting, GPU infrastructure, AI factory, AI cloud, GPU optimization, H100, A100, L40, Kubernetes GPU, distributed training, InfiniBand, NVIDIA, GPU utilization, ML infrastructure",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:site_name",
                    content: "BaaZ",
                },
                {
                    property: "og:locale",
                    content: "en_US",
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:site",
                    content: "@baazhq",
                },
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "author",
                    content: "BaaZ",
                },
            ],
        }),
}

module.exports = config
