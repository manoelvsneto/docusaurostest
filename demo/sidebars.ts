/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import {
  versionCrumb,
  versionSelector,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";

import payDirectOxxoMx from "./docs/pay/direct/oxxo/sidebar";
import payDirectPixBr from "./docs/pay/direct/pix/sidebar";
import payDirectPseCo from "./docs/pay/direct/pse/sidebar";


const sidebars: SidebarsConfig = {
  pay: [
    {
      type: "category",
      label: "Pay",
      link: {
        type: "generated-index",
        title: "Pay API",
        description:
          "This is a server Pay.",
        slug: "/category/aaaa-api",
      },
      items: payDirectOxxoMx,
    },
  ],
};

export default sidebars;
