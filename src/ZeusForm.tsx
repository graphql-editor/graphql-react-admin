import React, { useEffect, useState } from 'react';
import { FieldForm } from './FieldForm';
import { FormProps, ISubmitEvent } from '@rjsf/core';
import { Parser, ParserTree, Utils } from 'graphql-zeus';
import { JSONSchema7 } from 'json-schema';

type ZeusFormProps = { schema: string } | { url: string; header?: string | string[] };

export function ZeusForm<Y>(
    graphql: ZeusFormProps,
    FormComponent?: React.ComponentClass<FormProps<unknown>, unknown> | React.FC<FormProps<unknown>>,
) {
    return function Form<T extends keyof Y, Z extends keyof Y[T]>(type: T, field: Z) {
        return function ReactComponent({
            onSubmit,
            formData,
            override,
        }: {
            formData?: Required<Y[T]>[Z] extends [infer Payload, unknown] ? Partial<Payload> : never;
            onSubmit: Required<Y[T]>[Z] extends [infer Payload, unknown] ? (e: ISubmitEvent<Payload>) => void : never;
            override?: {
                [P in keyof Partial<Y>]: {
                    [R in keyof Partial<Y[P]>]: JSONSchema7;
                };
            };
        }) {
            const [tree, setTree] = useState<ParserTree>();
            useEffect(() => {
                if ('schema' in graphql) {
                    setTree(Parser.parse(graphql.schema));
                }
                if ('url' in graphql) {
                    Utils.getFromUrl(graphql.url, graphql.header).then((schema) => {
                        console.log(schema);
                        setTree(Parser.parse(schema));
                    });
                }
            }, [graphql]);
            if (!tree) {
                return <></>;
            }
            const typeNode = tree.nodes.find((tn) => tn.name === type);
            if (!typeNode) {
                throw new Error('Internal library error. Please check type');
            }
            const fieldNode = typeNode.args?.find((a) => a.name === field);
            if (!fieldNode) {
                throw new Error('Internal library error. Please check field');
            }
            return (
                <FieldForm
                    override={override}
                    FormComponent={FormComponent}
                    formData={formData}
                    onSubmit={onSubmit}
                    field={fieldNode}
                    tree={tree}
                />
            );
        };
    };
}
