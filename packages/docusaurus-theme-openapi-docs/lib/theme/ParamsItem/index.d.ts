import React from "react";
interface Map<T> {
    [key: string]: T;
}
export interface ExampleObject {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
}
export interface Props {
    param: {
        description: string;
        example: any;
        examples: Map<ExampleObject>;
        name: string;
        required: boolean;
        deprecated: boolean;
        schema: any;
    };
}
declare function ParamsItem({ param: { description, example, examples, name, required, schema, deprecated }, }: Props): React.JSX.Element;
export default ParamsItem;
