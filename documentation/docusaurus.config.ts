import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Phaselis",
  tagline: "React Native UI Framework",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/phaselis/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "protosoftware", // Usually your GitHub org/user name.
  projectName: "phaselis", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          lastVersion: "current",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ProtoYazilim/phaselis/tree/main/documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ProtoYazilim/phaselis/tree/main/documentation",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your  project's social card
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      hideOnScroll: true,
      logo: {
        alt: "Phaselis Logo",
        src: "img/phaselis-logo-dark.svg",
        srcDark: "img/phaselis-logo-light.svg",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/protoyazilim/phaselis",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        // { // ! verstion dropdown will be open after creating version https://docusaurus.io/docs/versioning
        //   type: "docsVersionDropdown",
        // },
      ],
    },
    footer: {
      links: [
        {
          title: "Site",
          items: [
            {
              label: "Components",
              to: "/docs/components",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Proto Software",
              href: "https://www.protoyazilim.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ProtoYazilim/phaselis",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Phaselis. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
