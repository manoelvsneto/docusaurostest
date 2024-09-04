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
          id: "pay/direct/pse/process-a-payment",
          label: "Process a payment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
