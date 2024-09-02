import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "allOf",
      link: {
        type: "doc",
        id: "tests/allof-variations-api",
      },
      items: [
        {
          type: "doc",
          id: "tests/multiple-all-of-with-nested-properties",
          label: "Multiple allOf with Nested Properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/all-of-with-shared-required-properties",
          label: "allOf with Shared Required Properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/all-of-with-deep-merging",
          label: "allOf with Deep Merging",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/all-of-with-same-level-properties",
          label: "allOf with Same-Level Properties",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "discriminator",
      link: {
        type: "doc",
        id: "tests/discriminator-variations-api",
      },
      items: [
        {
          type: "doc",
          id: "tests/basic-discriminator-without-mapping",
          label: "Basic Discriminator without Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-nested-schemas-without-mapping",
          label: "Discriminator with Nested Schemas without Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-shared-properties-without-mapping",
          label: "Discriminator with Shared Properties without Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-all-of-without-mapping",
          label: "Discriminator with AllOf without Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-required-properties-without-mapping",
          label: "Discriminator with Required Properties without Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/basic-discriminator-with-mapping",
          label: "Basic Discriminator with Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-nested-schemas-and-mapping",
          label: "Discriminator with Nested Schemas and Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-shared-properties-and-mapping",
          label: "Discriminator with Shared Properties and Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-all-of-and-mapping",
          label: "Discriminator with AllOf and Mapping",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/discriminator-with-required-properties-and-mapping",
          label: "Discriminator with Required Properties and Mapping",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "oneOf",
      link: {
        type: "doc",
        id: "tests/oneof-variations-api",
      },
      items: [
        {
          type: "doc",
          id: "tests/one-of-with-primitive-types",
          label: "oneOf with Primitive Types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/one-of-with-complex-types",
          label: "oneOf with Complex Types",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/one-of-with-nested-one-of",
          label: "oneOf with Nested oneOf",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/one-of-with-shared-properties",
          label: "oneOf with Shared Properties",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "tests/one-of-with-required-properties",
          label: "oneOf with Required Properties",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "tests/schemas/basebasic",
          label: "BaseBasic",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/basenested",
          label: "BaseNested",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/baseshared",
          label: "BaseShared",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/baseallof",
          label: "BaseAllOf",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/baserequired",
          label: "BaseRequired",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/basebasicmapping",
          label: "BaseBasicMapping",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/basenestedmapping",
          label: "BaseNestedMapping",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/basesharedmapping",
          label: "BaseSharedMapping",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/baseallofmapping",
          label: "BaseAllOfMapping",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/baserequiredmapping",
          label: "BaseRequiredMapping",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/typea",
          label: "TypeA",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/typeb",
          label: "TypeB",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/nestedtypea",
          label: "NestedTypeA",
          className: "schema",
        },
        {
          type: "doc",
          id: "tests/schemas/nestedtypeb",
          label: "NestedTypeB",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
