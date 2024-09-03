'use strict'
/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const react_1 = __importDefault(require('react'))
const CodeBlock_1 = __importDefault(require('@theme/CodeBlock'))
const SchemaTabs_1 = __importDefault(require('@theme/SchemaTabs'))
const TabItem_1 = __importDefault(require('@theme/TabItem'))
/* eslint-disable import/no-extraneous-dependencies*/
const clsx_1 = __importDefault(require('clsx'))
const react_markdown_1 = __importDefault(require('react-markdown'))
const rehype_raw_1 = __importDefault(require('rehype-raw'))
const createDescription_1 = require('../../markdown/createDescription')
const schema_1 = require('../../markdown/schema')
const utils_1 = require('../../markdown/utils')
function ParamsItem({
    param: {
        description,
        example,
        examples,
        name,
        required,
        schema,
        deprecated,
    },
}) {
    if (!schema || !schema?.type) {
        schema = { type: 'any' }
    }
    const renderSchemaName = (0, utils_1.guard)(schema, (schema) =>
        react_1.default.createElement(
            'span',
            { className: 'openapi-schema__type' },
            ' ',
            (0, schema_1.getSchemaName)(schema)
        )
    )
    const renderSchemaRequired = (0, utils_1.guard)(required, () =>
        react_1.default.createElement(
            'span',
            { className: 'openapi-schema__required' },
            'required'
        )
    )
    const renderDeprecated = (0, utils_1.guard)(deprecated, () =>
        react_1.default.createElement(
            'span',
            { className: 'openapi-schema__deprecated' },
            'deprecated'
        )
    )
    const renderSchema = (0, utils_1.guard)(
        (0, schema_1.getQualifierMessage)(schema),
        (message) =>
            react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement(react_markdown_1.default, {
                    children: (0, createDescription_1.createDescription)(
                        message
                    ),
                    rehypePlugins: [rehype_raw_1.default],
                })
            )
    )
    const renderDescription = (0, utils_1.guard)(description, (description) =>
        react_1.default.createElement(
            'div',
            null,
            react_1.default.createElement(react_markdown_1.default, {
                children: (0, createDescription_1.createDescription)(
                    description
                ),
                components: {
                    pre: 'div',
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        if (inline)
                            return react_1.default.createElement(
                                'code',
                                null,
                                children
                            )
                        return !inline && match
                            ? react_1.default.createElement(
                                  CodeBlock_1.default,
                                  { className: className },
                                  children
                              )
                            : react_1.default.createElement(
                                  CodeBlock_1.default,
                                  null,
                                  children
                              )
                    },
                },
                rehypePlugins: [rehype_raw_1.default],
            })
        )
    )
    const renderDefaultValue = (0, utils_1.guard)(
        schema && schema.items
            ? schema.items.default
            : schema
              ? schema.default
              : undefined,
        (value) =>
            react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement(react_markdown_1.default, {
                    children: `**Default value:** \`${value}\``,
                })
            )
    )
    const renderExample = (0, utils_1.guard)(
        (0, utils_1.toString)(example),
        (example) =>
            react_1.default.createElement(
                'div',
                null,
                react_1.default.createElement('strong', null, 'Example: '),
                example
            )
    )
    const renderExamples = (0, utils_1.guard)(examples, (examples) => {
        const exampleEntries = Object.entries(examples)
        return react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement('strong', null, 'Examples:'),
            react_1.default.createElement(
                SchemaTabs_1.default,
                null,
                exampleEntries.map(([exampleName, exampleProperties]) =>
                    // @ts-ignore
                    react_1.default.createElement(
                        TabItem_1.default,
                        { value: exampleName, label: exampleName },
                        exampleProperties.summary &&
                            react_1.default.createElement(
                                'p',
                                null,
                                exampleProperties.summary
                            ),
                        exampleProperties.description &&
                            react_1.default.createElement(
                                'p',
                                null,
                                react_1.default.createElement(
                                    'strong',
                                    null,
                                    'Description: '
                                ),
                                react_1.default.createElement(
                                    'span',
                                    null,
                                    exampleProperties.description
                                )
                            ),
                        react_1.default.createElement(
                            'p',
                            null,
                            react_1.default.createElement(
                                'strong',
                                null,
                                'Example: '
                            ),
                            react_1.default.createElement(
                                'code',
                                null,
                                exampleProperties.value
                            )
                        )
                    )
                )
            )
        )
    })
    return react_1.default.createElement(
        'div',
        { className: 'openapi-params__list-item' },
        react_1.default.createElement(
            'span',
            { className: 'openapi-schema__container' },
            react_1.default.createElement(
                'strong',
                {
                    className: (0, clsx_1.default)('openapi-schema__property', {
                        'openapi-schema__strikethrough': deprecated,
                    }),
                },
                name
            ),
            renderSchemaName,
            (required || deprecated) &&
                react_1.default.createElement('span', {
                    className: 'openapi-schema__divider',
                }),
            renderSchemaRequired,
            renderDeprecated
        ),
        renderSchema,
        renderDefaultValue,
        renderDescription,
        renderExample,
        renderExamples
    )
}
exports.default = ParamsItem
