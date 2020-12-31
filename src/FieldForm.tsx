import { Options, ParserField, ParserTree, ScalarTypes, TypeDefinition, ValueDefinition } from 'graphql-zeus';
import React, { useEffect, useState } from 'react';
import { JSONSchema7 } from 'json-schema';
import Form, { FormProps } from '@rjsf/core';

//TODO handle enums and custom scalars

interface FieldFormProps extends Omit<FormProps<unknown>, 'schema'> {
    field: ParserField;
    tree: ParserTree;
    FormComponent?: React.ComponentClass<FormProps<unknown>, unknown> | React.FC<FormProps<unknown>>;
}

const convertType = (f: ParserField, tree: ParserTree): JSONSchema7 => {
    if (f.data.type === ValueDefinition.InputValueDefinition) {
        if (f.type.name === ScalarTypes.Boolean) {
            return { type: 'boolean' };
        }
        if (f.type.name === ScalarTypes.Float) {
            return { type: 'number' };
        }
        if (f.type.name === ScalarTypes.Int) {
            return { type: 'integer' };
        }
        if (f.type.name === ScalarTypes.ID) {
            return { type: 'string' };
        }
        if (f.type.name === ScalarTypes.String) {
            return { type: 'string' };
        }
        const lookForField = tree.nodes.find((r) => r.name === f.type.name);
        if (lookForField?.data.type === TypeDefinition.EnumTypeDefinition) {
            return {
                type: 'string',
                enum: lookForField.args?.map((a) => a.name),
            };
        }
        return {
            type: 'object',
            required: lookForField?.args?.filter((a) => a.type.options?.includes(Options.required)).map((n) => n.name),
            properties: lookForField?.args?.reduce((a, b) => {
                a[b.name] = convertField(b, tree);
                return a;
            }, {} as Required<JSONSchema7>['properties']),
        };
    }
    // It must be a field then
    return {
        type: 'object',
        required: f?.args?.filter((a) => a.type.options?.includes(Options.required)).map((n) => n.name),
        properties: f.args?.reduce((a, b) => {
            a[b.name] = convertField(b, tree);
            return a;
        }, {} as Required<JSONSchema7>['properties']),
    };
};
const convertField = (f: ParserField, tree: ParserTree): JSONSchema7 => {
    if (f.type.options?.includes(Options.array)) {
        return {
            type: 'array',
            items: convertType(f, tree),
        };
    }
    return convertType(f, tree);
};

export const FieldForm: React.FC<FieldFormProps> = ({ field, tree, FormComponent = Form, ...formProps }) => {
    const [currentSchema, setCurrentSchema] = useState<JSONSchema7>();
    useEffect(() => {
        setCurrentSchema(convertField(field, tree));
    }, [field]);
    if (!currentSchema) {
        return <div>Loading...</div>;
    }
    console.log(currentSchema);
    return <FormComponent {...formProps} schema={currentSchema} />;
};
