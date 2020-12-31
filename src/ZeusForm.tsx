import React, { useEffect, useState } from 'react';
import { FieldForm } from './FieldForm';
import Form, { ISubmitEvent } from '@rjsf/core';
import { Parser, ParserTree, Utils } from 'graphql-zeus';

type ZeusFormProps = { schema: string } | { url: string; header?: string | string[] };

export function ZeusForm<Y>(graphql: ZeusFormProps, FormComponent?: typeof Form) {
    return function Form<T extends keyof Y, Z extends keyof Y[T]>(type: T, field: Z) {
        return function ReactComponent({
            onSubmit,
            formData,
        }: {
            formData?: Required<Y[T]>[Z] extends [infer Payload, unknown] ? Partial<Payload> : never;
            onSubmit: Required<Y[T]>[Z] extends [infer Payload, unknown] ? (e: ISubmitEvent<Payload>) => void : never;
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
