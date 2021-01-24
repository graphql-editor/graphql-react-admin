import { Options, ParserField, ParserTree, ScalarTypes, TypeDefinition, ValueDefinition } from 'graphql-zeus';
import React, { useEffect, useState } from 'react';
import { JSONSchema7 } from 'json-schema';
import Form, { FormProps } from '@rjsf/core';
import { JSONSchemaOverrideProperties, OverrideFormSchema, UniversalFormOverride } from './models';

//TODO handle enums and custom scalars

interface FieldFormProps extends Omit<FormProps<any>, 'schema'> {
    field: ParserField;
    tree: ParserTree;
    override?: OverrideFormSchema;
    FormComponent?: UniversalFormOverride;
}

type ConvertField = {
    f: ParserField;
    tree: ParserTree;
    parent?: ParserField;
    override?: OverrideFormSchema;
};

const getDataType = ({ f, tree, override }: ConvertField): JSONSchema7 => {
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
        if (lookForField?.data.type === TypeDefinition.ScalarTypeDefinition) {
            return {
                type: 'string',
            };
        }
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
                a[b.name] = convertField({ f: b, tree, override, parent: lookForField });
                return a;
            }, {} as Required<JSONSchema7>['properties']),
        };
    }
    // It must be a field then
    return {
        type: 'object',
        required: f?.args?.filter((a) => a.type.options?.includes(Options.required)).map((n) => n.name),
        properties: f.args?.reduce((a, b) => {
            a[b.name] = convertField({ f: b, tree, override });
            return a;
        }, {} as Required<JSONSchema7>['properties']),
    };
};

const convertType = (props: ConvertField): JSONSchema7 => {
    const { override, parent, f } = props;
    const type = getDataType(props);
    if (override && parent) {
        const fieldOverride = override[parent.name]?.[f.name];
        if (fieldOverride) {
            return fieldOverride(type as JSONSchemaOverrideProperties<any>);
        }
    }
    return type;
};
const convertField = (props: ConvertField): JSONSchema7 => {
    if (props.f.type.options?.includes(Options.array)) {
        return {
            type: 'array',
            items: convertType(props),
        };
    }
    return convertType(props);
};

export function FieldForm(props: FieldFormProps) {
    const { field, override, tree, FormComponent, ...formProps } = props;
    const [currentSchema, setCurrentSchema] = useState<JSONSchema7>();
    useEffect(() => {
        setCurrentSchema(convertField({ f: field, tree, override }));
    }, [field]);
    if (!currentSchema) {
        return <div>Loading...</div>;
    }
    if (FormComponent) {
        return FormComponent({ ...props, schema: currentSchema });
    }
    return <Form {...formProps} schema={currentSchema} />;
}
