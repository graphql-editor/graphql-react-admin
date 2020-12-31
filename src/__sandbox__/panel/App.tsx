import { FormQL } from '../../FormQL';
import React from 'react';
import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/material-ui';

const Form = withTheme(Theme);

export const App = () => {
    return (
        <div>
            <FormQL FormComponent={Form} graphql={{ url: 'https://faker.graphqleditor.com/a-team/potus/graphql' }} />
        </div>
    );
};
