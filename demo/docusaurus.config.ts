import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

import { DOCUSAURUS_VERSION } from "@docusaurus/utils";
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: "Docusaurus OpenAPI Docs",
  tagline: "OpenAPI plugin for generating API reference docs in Docusaurus v2",
  url: "https://docusaurus-openapi.tryingpan.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PaloAltoNetworks",
  projectName: "docusaurus-openapi-docs",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "AAAAAA",
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
     [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
         /* {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'examples/pay/direct/direct.yaml',
            route: '/api/',
          },*/
          // You can also pass it a OpenAPI spec URL
         /* {
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            //route: './examples/direct/pay/',
          },*/
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] satisfies Redocusaurus.PresetEntry,

  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "OpenAPI Docs",
      logo: {
        alt: "Keytar",
        src: "img/docusaurus-openapi-docs-logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "API's",
          position: "left",
          items: [
           {
              label: "Direct Pay",
              to: "/pay/direct/process-a-payment",
            },
            {
              label: "Cancel Payment",
              to: "/pay/direct/execute-cancellation",
            },
            {
              label: "Refund",
              to: "/pay/direct/request-or-cancel-a-refund",
            },
            {
              label: "Refund or Cancel",
              to: "/pay/direct/refund-orcancel",
            },
            {
              label: "Payment Page API",
              to: "/pay/direct/create-a-payment-request",
            },
            {
              label: "Resend Bank Info",
              to: "/pay/direct/resend-bank-info",
            },
            {
              label: "Get FX rate",
              to: "/pay/exchange/currency-exchange-conversion",
            },
            {
              label: "Get an FX Token",
              to: "/pay/fxtoken/get-fx-token",
            },
            {
              label: "Create a card Token",
              to: "/pay/tokenization/create-a-card-token",
            },
            {
              label: "Set a token CVV",
              to: "/pay/tokenization/set-a-token-cvv",
            },  
            {
              label: "Get available e-wallets",
              to: "/pay/ewallet/get-e-wallets",
            },
            {
              label: "Capture a payment",
              to: "/pay/direct/capture-a-payment",
            },
            {
              label: "Empresa BIN List",
              to: "/pay/utils/returns-a-list-of-valid-card-bi-ns",
            },
            {
              label: "Get bank list",
              to: "/pay/utils/get-the-list-of-banks-available-for-processing-payments",
            },
            {
              label: "Query",
              to: "/pay/utils/payment-query",
            },
            {
              label: "Payout create",
              to: "/pay/payout/create-a-payout-request",
            },
            {
              label: "Payout retrieve",
              to: "/pay/payout/retrieve-payout-information",
            },
            {
              label: "Payout commit",
              to: "/pay/payout/commit-a-payout-request",
            },
            {
              label: "Cancel a Payout request",
              to: "/pay/payout/cancel-a-payout-request",
            },
            {
              label: "Search Payout requests",
              to: "/pay/payout/search-payout-request",
            },
            {
              label: "Payout Get Available Balance",
              to: "/pay/payout/get-available-balance",
            },
            
           
          ],
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
              label: "OpenAPI Docs",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
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
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
    },
    prism: {
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
      ],
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
    algolia: {
      apiKey: "441074cace987cbf4640c039ebed303c",
      appId: "J0EABTYI1A",
      indexName: "docusaurus-openapi",
    },
    announcementBar: {
      id: "announcementBar_1",
      content: "First stable release for Docusaurus v3 now available!",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          direct: {
            specPath: "examples/pay/direct/direct.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          cancelpayment: {
            specPath: "examples/pay/direct/cancel-payment.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          refund: {
            specPath: "examples/pay/direct/refund.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          refundOrCancel: {
            specPath: "examples/pay/direct/refundOrCancel.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          capture: {
            specPath: "examples/pay/direct/capture.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          exchange: {
            specPath: "examples/pay/exchange/exchange.yaml",
            outputDir: "docs/pay/exchange",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          fxtoken: {
            specPath: "examples/pay/exchange/fxtoken.yaml",
            outputDir: "docs/pay/fxtoken",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          token: {
            specPath: "examples/pay/tokenization/token.yaml",
            outputDir: "docs/pay/tokenization",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          setcvv: {
            specPath: "examples/pay/tokenization/tokensetcvv.yaml",
            outputDir: "docs/pay/tokenization",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          getavailablewallets: {
            specPath: "examples/pay/ewallet/get-available-wallets.yaml",
            outputDir: "docs/pay/ewallet",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          binlist: {
            specPath: "examples/pay/utils/cardbin.yaml",
            outputDir: "docs/pay/utils",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          getbanklist: {
            specPath: "examples/pay/utils/getbanklist.yaml",
            outputDir: "docs/pay/utils",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          query: {
            specPath: "examples/pay/utils/query.yaml",
            outputDir: "docs/pay/utils",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_create: {
            specPath: "examples/pay/payout/create.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_retrieve: {
            specPath: "examples/pay/payout/retrieve.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_commit: {
            specPath: "examples/pay/payout/commit.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_cancel: {
            specPath: "examples/pay/payout/cancel.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_balance: {
            specPath: "examples/pay/payout/balance.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          payout_search: {
            specPath: "examples/pay/payout/search.yaml",
            outputDir: "docs/pay/payout",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          updatecustomerbankinfo: {
            specPath: "examples/pay/direct/updatecustomerbankinfo.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          direct_request: {
            specPath: "examples/pay/direct/request.yaml",
            outputDir: "docs/pay/direct",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
          

          /*petstore: {
            specPath: "https://redocly.github.io/redoc/openapi.yaml",
            outputDir: "docs/petstore",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,*/




        } satisfies Plugin.PluginOptions,
        
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-theme-openapi-docs","@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

export default async function createConfig() {
  return config;
}
