import { ParserField } from 'graphql-zeus';
import React from 'react';

interface SelectArgProps {
    fields: ParserField[];
    onChange: (fieldName: string) => void;
    currentFieldName: string;
}

export const SelectArg: React.FC<SelectArgProps> = ({ fields, currentFieldName, onChange }) => {
    return (
        <select
            value={currentFieldName}
            onChange={(e) => {
                onChange(e.target.value);
            }}
        >
            {fields.map((a) => (
                <option key={a.name} value={a.name}>
                    {a.name}
                </option>
            ))}
        </select>
    );
};
