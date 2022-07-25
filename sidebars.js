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
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: '力扣',
      items: [{
        type: 'doc',
        id: 'leetcode/intro',
        label: 'LeetCode主页'
      }, {
        type: 'category',
        label: '2021年',
        items: [{type: 'autogenerated', dirName: 'leetcode/2021'}]
      }, {
        type: 'category',
        label: '2022年',
        items: [{type: 'autogenerated', dirName: 'leetcode/2022'}]
      }, {
        type: 'category',
        label: '比赛特辑',
        items: [{type: 'autogenerated', dirName: 'leetcode/special'}]
      },{
        type: 'doc',
        id: 'leetcode/leanote',
        label: '关于从蚂蚁笔记迁移而来的说明'
      }
      ],
    },
    {
      type: 'category',
      label: 'Codeforces',
      items: [{
        type: 'doc',
        id: 'codeforces/intro',
        label: 'CodeForces主页'
      }],
    },
    {
      type: 'category',
      label: 'rCore学习日志',
      items: [{type: 'autogenerated', dirName: 'rcore'}],
    }
  ],

};

module.exports = sidebars;
