import { FormProps } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';
import React, { FunctionComponent } from 'react';
export type UniversalFormType<T> = React.ComponentClass<FormProps<T> | FunctionComponent<FormProps<T>>>;
export type UniversalFormOverride<T = any> = (props: FormProps<T>) => JSX.Element;
export type JSONSchemaOverrideProperties<T> = Omit<JSONSchema7, 'properties'> & {
    properties: T extends {
        [P in keyof T]: T[P];
    }
        ? {
              [P in keyof T]: JSONSchema7;
          }
        : never;
};
type ExtractPayLoad<T> = T extends [infer PayLoad, any] ? PayLoad : T;
export type OverrideFormSchema<Y = any> = {
    [P in keyof Y]?: {
        [R in keyof Y[P]]?: (
            generated: JSONSchemaOverrideProperties<ExtractPayLoad<Y[P][R]>>,
        ) => JSONSchemaOverrideProperties<ExtractPayLoad<Y[P][R]>> | undefined;
    };
};
