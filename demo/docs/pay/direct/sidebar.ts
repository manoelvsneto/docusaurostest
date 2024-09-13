import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pay/direct/payment-api-direct-pay",
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
          id: "pay/direct/schemas/pixprrequestbody",
          label: "PIXPRRequestBody",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/psecosuccessresponse",
          label: "PSECOSuccessResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/pixbrsuccessresponse",
          label: "PIXBRSuccessResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "pay/direct/schemas/oxxomxsuccessresponse",
          label: "OXXOMXSuccessResponse",
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
