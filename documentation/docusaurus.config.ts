import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "Phaselis",
  tagline: "React Native UI Framework",
  favicon: "img/favicon.png",

  url: "https://protoyazilim.com",
  baseUrl: "/phaselis/",

  organizationName: "protoyazilim",
  projectName: "phaselis",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          editUrl:
            "https://github.com/ProtoYazilim/phaselis/tree/main/documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/ProtoYazilim/phaselis/tree/main/documentation",
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
    docs: {
      sidebar: {
        hideable: true,
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
        href: "/phaselis/docs/intro",
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
      ],
    },
    footer: {
      links: [
        {
          title: "Site",
          items: [
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
              label: ";proto",
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

  plugins: [
    function serveCustomIndex(): any {
      return {
        name: "custom-index",
        configureWebpack() {
          return {
            devServer: {
              onBeforeSetupMiddleware(devServer) {
                devServer.app.get("/phaselis", (_, res) => {
                  res.sendFile(path.resolve(__dirname, "static/landing.html"));
                });
              },
            },
          };
        },
        // Removed production middleware; added postBuild hook to copy landing.html into the build folder.
        postBuild({ outDir }) {
          const fs = require("fs-extra");
          const destDir = path.join(outDir, "/");
          fs.ensureDirSync(destDir);
          fs.copySync(
            path.resolve(__dirname, "static/landing.html"),
            path.join(destDir, "index.html"),
          );
          console.log(
            "Copied landing.html to",
            path.join(destDir, "index.html"),
          );
        },
      };
    },
  ],
};

export default config;
