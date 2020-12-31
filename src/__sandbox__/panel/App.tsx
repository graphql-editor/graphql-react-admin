import { FormQL } from '../../FormQL';
import React from 'react';
import { withTheme } from '@rjsf/core';

const Form = withTheme({});

export const App = () => {
    return (
        <div>
            <FormQL FormComponent={Form} graphql={{ url: 'https://faker.graphqleditor.com/a-team/potus/graphql' }} />
        </div>
    );
};
