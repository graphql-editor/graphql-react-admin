import React, { useEffect, useState } from 'react';
import { FieldForm } from './FieldForm';
import { ISubmitEvent } from '@rjsf/core';
import { Parser, ParserTree, Utils } from 'graphql-zeus';
import { OverrideFormSchema, UniversalFormOverride } from './models';

type ZeusFormProps = { schema: string } | { url: string; header?: string | string[] };

export function ZeusForm<Y>(graphql: ZeusFormProps, FormComponent?: UniversalFormOverride) {
    return function Form<T extends keyof Y, Z extends keyof Y[T]>(type: T, field?: Z) {
        type FormDataType = Required<Y[T]>[Z] extends [infer Payload, unknown] ? Payload : Required<Y>[T];
        return function ReactComponent({
            onSubmit,
            formData,
            override,
        }: {
            formData?: FormDataType;
            onSubmit: (e: ISubmitEvent<FormDataType>) => void;
            override?: OverrideFormSchema<Y>;
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
            let typeNode = tree.nodes.find((tn) => tn.name === type);
            if (!typeNode) {
                throw new Error('Internal library error. Please check type');
            }
            if (field) {
                typeNode = typeNode.args?.find((a) => a.name === field);
                if (!typeNode) {
                    throw new Error('Internal library error. Please check field');
                }
            }
            return (
                <FieldForm
                    override={override}
                    FormComponent={FormComponent}
                    formData={formData}
                    onSubmit={onSubmit}
                    field={typeNode}
                    tree={tree}
                />
            );
        };
    };
}
