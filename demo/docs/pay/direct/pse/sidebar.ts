import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/direct/pse/payment-api-for-pse-co",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/direct/pse/process-a-payment-request",
          label: "Process a payment request",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
