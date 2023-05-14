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
    // By default, Docusaurus generates a sidebar from the docs folder structure
    druidSidebar: [
        { type: "autogenerated", dirName: "1.druid-on-kubernetes" },
        {
            type: "link",
            label: "Resources",
            href: "https://github.com/datainfrahq",
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
            href: "https://github.com/datainfrahq",
        },
        {
            type: "link",
            label: "Github",
            href: "https://github.com/datainfrahq",
        },
    ],
    pinotSidebar: [
        { type: "autogenerated", dirName: "2.pinot-on-kubernetes" },
        {
            type: "link",
            label: "Resources",
            href: "https://github.com/datainfrahq",
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
            href: "https://github.com/datainfrahq",
        },
        {
            type: "link",
            label: "Github",
            href: "https://github.com/datainfrahq",
        },
    ],
    dsoiSidebar: [
        {
            type: "autogenerated",
            dirName: "3.distributed-systems-operator-interface",
        },
        {
            type: "link",
            label: "Resources",
            href: "https://github.com/datainfrahq",
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
            href: "https://github.com/datainfrahq",
        },
        {
            type: "link",
            label: "Github",
            href: "https://github.com/datainfrahq",
        },
    ],
    operatorSidebar: [
        { type: "autogenerated", dirName: "4.operator-runtime" },
        {
            type: "link",
            label: "Resources",
            href: "https://github.com/datainfrahq",
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
            href: "https://github.com/datainfrahq",
        },
        {
            type: "link",
            label: "Github",
            href: "https://github.com/datainfrahq",
        },
    ],

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
