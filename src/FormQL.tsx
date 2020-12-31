import { Parser, ParserField, ParserTree, TypeDefinition, Utils } from 'graphql-zeus';
import React, { useEffect, useState } from 'react';
import { FieldForm } from './FieldForm';
import { SelectArg } from './SelectArg';
import { FormProps } from '@rjsf/core';

interface FormQLProps {
    graphql: { schema: string } | { url: string; header?: string | string[] };
    FormComponent?: React.ComponentClass<FormProps<unknown>, unknown> | React.FC<FormProps<unknown>>;
}
export const FormQL: React.FC<FormQLProps> = ({ graphql, FormComponent }) => {
    const [rootTypes, setRootTypes] = useState<ParserField[]>();
    const [tree, setTree] = useState<ParserTree>();
    const [selectedType, setSelectedType] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [schemaString, setSchemaString] = useState('');
    useEffect(() => {
        if ('schema' in graphql) {
            setSchemaString(graphql.schema);
        } else if ('url' in graphql) {
            Utils.getFromUrl(graphql.url, graphql.header).then(setSchemaString);
        }
    }, [graphql]);
    useEffect(() => {
        if (schemaString) {
            const t = Parser.parse(schemaString);
            setTree(t);
            const types = t.nodes.filter((n) => n.data.type === TypeDefinition.ObjectTypeDefinition);
            types.sort((a, b) => (a.name > b.name ? 1 : -1));
            setRootTypes(types);
        }
    }, [schemaString]);
    useEffect(() => {
        setSelectedField('');
    }, [selectedType]);

    if (!rootTypes || !tree) {
        return <div>Waiting for tree node</div>;
    }
    const selectedNode = rootTypes.find((rt) => rt.name === selectedType);
    const selectedFieldNode = selectedNode?.args?.find((a) => a.name === selectedField);
    return (
        <div>
            <SelectArg fields={rootTypes} currentFieldName={selectedType} onChange={setSelectedType} />
            {selectedNode && (
                <SelectArg
                    fields={selectedNode.args || []}
                    currentFieldName={selectedField}
                    onChange={setSelectedField}
                />
            )}
            {selectedFieldNode && <FieldForm FormComponent={FormComponent} field={selectedFieldNode} tree={tree} />}
        </div>
    );
};
