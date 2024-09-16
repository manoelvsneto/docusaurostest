import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/direct/payment-processing-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "pay/direct/process-a-payment",
          label: "Process a payment",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "pay/direct/schemas/pix-payment-request",
          label: "Pix Payment Request",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/pix-payment-response",
          label: "Pix Payment Response",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/pse-payment-request",
          label: "PSE Payment Request",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/pse-payment-response",
          label: "PSE Payment Response",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/oxxo-payment-request",
          label: "OXXO Payment Request",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/oxxo-payment-response",
          label: "OXXO Payment Response",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/errorresponse",
          label: "ErrorResponse",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
