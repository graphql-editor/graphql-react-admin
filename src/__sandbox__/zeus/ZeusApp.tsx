import React from 'react';
import { ValueTypes } from '../potus';
import { ZeusForm } from '../../ZeusForm';

const Form = ZeusForm<ValueTypes>({ url: 'https://faker.graphqleditor.com/a-team/potus/graphql' });
const AddOrderForm = Form('AdminMutation', 'createOrder');
const CreateDriverForm = Form('CreateDriver');
export const ZeusApp = () => {
    return (
        <div style={{ padding: 60 }}>
            <AddOrderForm
                override={{
                    CreateOrder: {
                        pieces: () => undefined,
                    },
                }}
                formData={{
                    createOrder: {
                        refId: Math.floor(10000 * Math.random()) + '',
                        loadAddressKey: { addressKey: '123' },
                        plannedEndDate: new Date().toISOString(),
                        unloadAddressKey: { addressKey: '123' },
                    },
                }}
                onSubmit={(e) => {
                    console.log(e);
                }}
            />
            <CreateDriverForm onSubmit={(e) => console.log(e)} />
        </div>
    );
};
