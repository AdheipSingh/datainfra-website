/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // // By default, Docusaurus generates a sidebar from the docs folder structure
    // druidSidebar: [
    //     { type: "autogenerated", dirName: "1.developer-documentation" },
    //     {
    //         type: "html",
    //         value: "<span style='font-size: 1.125rem; margin-left: 8px; padding-bottom: 0;'>Resources</span>",
    //         defaultStyle: true, // Use the default menu item styling
    //     },
    //     {
    //         type: "html",
    //         value: "<hr style='margin:0; background: var(--ifm-toc-border-color);'></hr>", // The HTML to be rendered
    //         defaultStyle: true, // Use the default menu item styling
    //         className: "separator",
    //     },
    //     {
    //         type: "link",
    //         label: "Support",
    //         href: "https://www.datainfra.io/demo-druid",
    //     },
    //     {
    //         type: "link",
    //         label: "Github",
    //         href: "https://github.com/datainfrahq/druid-operator",
    //     },
    // ],
    // pinotSidebar: [
    //     { type: "autogenerated", dirName: "2.pinot-on-kubernetes" },
    //     {
    //         type: "html",
    //         value: "<span style='font-size: 1.125rem; margin-left: 8px; padding-bottom: 0;'>Resources</span>",
    //         defaultStyle: true, // Use the default menu item styling
    //     },
    //     {
    //         type: "html",
    //         value: "<hr style='margin:0; background: var(--ifm-toc-border-color);'></hr>", // The HTML to be rendered
    //         defaultStyle: true, // Use the default menu item styling
    //         className: "separator",
    //     },
    //     {
    //         type: "link",
    //         label: "Support",
    //         href: "https://www.datainfra.io/demo",
    //     },
    //     {
    //         type: "link",
    //         label: "Github",
    //         href: "https://github.com/datainfrahq",
    //     },
    // ],
    dsoiSidebar: [
        {
            type: "autogenerated",
            dirName: "1.developer-documentation",
        },
        {
            type: "html",
            value: "<span style='font-size: 1.125rem; margin-left: 8px; padding-bottom: 0;'>Resources</span>",
            defaultStyle: true, // Use the default menu item styling
        },
        {
            type: "html",
            value: "<hr style='margin:0; background: var(--ifm-toc-border-color);'></hr>", // The HTML to be rendered
            defaultStyle: true, // Use the default menu item styling
            className: "separator",
        },
        {
            type: "link",
            label: "Support",
            href: "https://www.baaz.dev/demo",
        },
        {
            type: "link",
            label: "Github",
            href: "https://github.com/baazhq/baaz",
        },
    ],
    // operatorSidebar: [
    //     { type: "autogenerated", dirName: "4.operator-runtime" },
    //     {
    //         type: "html",
    //         value: "<span style='font-size: 1.125rem; margin-left: 8px; padding-bottom: 0;'>Resources</span>",
    //         defaultStyle: true, // Use the default menu item styling
    //     },
    //     {
    //         type: "html",
    //         value: "<hr style='margin:0; background: var(--ifm-toc-border-color);'></hr>", // The HTML to be rendered
    //         defaultStyle: true, // Use the default menu item styling
    //         className: "separator",
    //     },
    //     {
    //         type: "link",
    //         label: "Support",
    //         href: "https://www.datainfra.io/demo",
    //     },
    //     {
    //         type: "link",
    //         label: "Github",
    //         href: "https://github.com/datainfrahq",
    //     },
    // ],

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
}

module.exports = sidebars
