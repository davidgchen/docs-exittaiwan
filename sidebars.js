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
  start: [
    {
      type: 'autogenerated',
      dirName: '開始使用',
    },
  ],
  project: [
    {
      type: 'autogenerated',
      dirName: '選擇國家',
    },
  ],
  tool: [
    {
      type: 'autogenerated',
      dirName: '好用工具',
    },
  ],
    /*{
      type: 'link',
      label: 'Chat with us on Discord',
      href: 'https://discord.gg/docusaurus',
    },*/

  // But you can create a sidebar manually
  
  /*introSidebar: [
    {
      type: 'doc',
      id: '如何快速上手'
    },
    
    {
      type: 'category',
      label: '奧地利打工度假',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: '申請打工度假簽證',
          link: {
            type: 'generated-index',
          },
          items: [
            '奧地利打工度假/申請打工度假簽證/基本資訊＆準備資料',
            '奧地利打工度假/申請打工度假簽證/奧地利 D 簽證申請表',
            '奧地利打工度假/申請打工度假簽證/申請＆換發護照',
          ],
        },
        {
          type: 'category',
          label: '開立奧地利銀行戶頭',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'category',
              label: '網路銀行',
              link: {
                type: 'generated-index',
              },
              items: [
                '奧地利打工度假/開立奧地利銀行戶頭/網路銀行/Wise',
              ],
            },
            {
              type: 'category',
              label: '實體銀行',
              link: {
                type: 'generated-index',
              },
              items: [
                '奧地利打工度假/開立奧地利銀行戶頭/實體銀行/bank-of-austria',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '子資料夾',
          link: {
            type: 'doc',
            id: '奧地利打工度假/子資料夾/index',
          },
          items: [
            '奧地利打工度假/子資料夾/markdown-features',
          ],
        },
      ],
    },
    
   /* {
      type: 'category',
      label: 'Tutorial',
      link: {
        type: 'generated-index',
      },
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
    ],
    },
  ],*/
   
};



module.exports = sidebars;
