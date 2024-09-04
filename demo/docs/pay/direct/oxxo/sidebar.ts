import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/direct/oxxo/payment-api-for-oxxopay-mx",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/direct/oxxo/request-payment",
          label: "Process a payment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
