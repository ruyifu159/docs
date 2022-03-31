/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "入门",
      collapsed: false,
      items: [
        "getting-started/prepare",
        {
          type: "category",
          label: "安装指南",
          items: [
            "getting-started/install/linux",
            "getting-started/install/docker",
            {
              type: "category",
              label: "其他指南",
              items: [
                "getting-started/install/other/bt-panel",
                "getting-started/install/other/oneinstack",
                "getting-started/install/other/tencent-cloudbase",
                "getting-started/install/other/docker-mysql",
                "getting-started/install/other/docker-compose",
                {
                  type: "link",
                  label: "腾讯云开发者实验室",
                  href: "https://cloud.tencent.com/developer/labs/lab/10523",
                },
              ],
            },
            "getting-started/install/third-party",
          ],
        },
        "getting-started/config",
        "getting-started/upgrade",
        "getting-started/downloads",
      ],
    },
    {
      type: "category",
      label: "用户指南",
      items: [
        "user-guide/backup-migration",
        "user-guide/markdown",
        "user-guide/faq",
      ],
    },
    {
      type: "category",
      label: "开发者指南",
      items: [
        {
          type: "category",
          label: "系统开发",
          items: [
            "developer-guide/core/structure",
            "developer-guide/core/prepare",
            "developer-guide/core/code-style",
          ],
        },
        {
          type: "category",
          label: "主题开发",
          items: [
            "developer-guide/theme/prepare",
            "developer-guide/theme/config-files",
            "developer-guide/theme/global-variable",
            "developer-guide/theme/public-template-tag",
            "developer-guide/theme/page-variable",
            "developer-guide/theme/template-tag",
          ],
        },
        {
          type: "link",
          label: "REST API",
          href: "https://api.halo.run",
        },
      ],
    },
    {
      type: "category",
      label: "参与贡献",
      items: ["contribution/issue", "contribution/pr"],
    },
    "about",
  ],
};
