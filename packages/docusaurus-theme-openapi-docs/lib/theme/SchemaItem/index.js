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
const clsx_1 = __importDefault(require('clsx'))
const react_markdown_1 = __importDefault(require('react-markdown'))
const rehype_raw_1 = __importDefault(require('rehype-raw'))
const createDescription_1 = require('../../markdown/createDescription')
const utils_1 = require('../../markdown/utils')
function SchemaItem({
    children: collapsibleSchemaContent,
    collapsible,
    name,
    qualifierMessage,
    required,
    schemaName,
    schema,
}) {
    let deprecated
    let schemaDescription
    let defaultValue
    let nullable
    if (schema) {
        deprecated = schema.deprecated
        schemaDescription = schema.description
        defaultValue = schema.default
        nullable = schema.nullable
    }
    const renderRequired = (0, utils_1.guard)(
        Array.isArray(required) ? required.includes(name) : required,
        () =>
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
    const renderNullable = (0, utils_1.guard)(nullable, () =>
        react_1.default.createElement(
            'span',
            { className: 'openapi-schema__nullable' },
            'nullable'
        )
    )
    const renderSchemaDescription = (0, utils_1.guard)(
        schemaDescription,
        (description) =>
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
    const renderQualifierMessage = (0, utils_1.guard)(
        qualifierMessage,
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
    const renderDefaultValue = (0, utils_1.guard)(defaultValue, (value) =>
        react_1.default.createElement(
            'div',
            { className: '' },
            react_1.default.createElement(react_markdown_1.default, {
                children: `**Default value:** \`${value}\``,
            })
        )
    )
    const schemaContent = react_1.default.createElement(
        'div',
        null,
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
            react_1.default.createElement(
                'span',
                { className: 'openapi-schema__name' },
                ' ',
                schemaName
            ),
            (nullable || required || deprecated) &&
                react_1.default.createElement('span', {
                    className: 'openapi-schema__divider',
                }),
            renderNullable,
            renderRequired,
            renderDeprecated
        ),
        renderQualifierMessage,
        renderDefaultValue,
        renderSchemaDescription,
        collapsibleSchemaContent ?? collapsibleSchemaContent
    )
    return react_1.default.createElement(
        'div',
        { className: 'openapi-schema__list-item' },
        collapsible ? collapsibleSchemaContent : schemaContent
    )
}
exports.default = SchemaItem
