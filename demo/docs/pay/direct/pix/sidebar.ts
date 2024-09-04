import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/direct/pix/payment-api-for-pix-br",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/direct/pix/process-a-payment",
          label: "Process a payment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
