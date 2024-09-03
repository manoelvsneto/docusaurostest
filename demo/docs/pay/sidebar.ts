import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/payment-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/request-payment",
          label: "Request a payment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
