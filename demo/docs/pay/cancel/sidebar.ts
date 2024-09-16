import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/cancel/cancellation-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/cancel/execute-cancellation",
          label: "Execute Cancellation",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
