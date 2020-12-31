# GraphQL React Admin

Easily generate react forms for your GraphQL schema and create instant Form based GraphiQL.

- [GraphQL React Admin](#graphql-react-admin)
  - [Installation](#installation)
  - [Usage](#usage)
    - [FormQL](#formql)
    - [ZeusForm](#zeusform)
  - [Themes](#themes)
  - [Deps](#deps)
  - [Development](#development)
  - [Releasing](#releasing)

## Installation

```sh
npm i graphql-react-admin react react-dom @rjsf/core
```

## Usage

### FormQL

Interactive component for full GraphiQL experience using forms

```tsx
import { FormQL } from 'graphql-react-admin';
import React from 'react';

const schema = `
type Query{
	listBooks: [Book!]!
	listAuthors: [Author!]!
	getBook(
		id: String
	): Book!
	getAuthor(
		id: String
	): Author!
	"""
	type object node
	"""
	getAllRentals: [RentABook!]
}

type Book{
	id: ID
	name: String!
	author: Author!
}

type Author{
	id: ID
	firstName: String!
	lastName: String!
}

"""
type object node
"""
type RentABook{
	"""
	type object node
	"""
	client: Customer!
	"""
	scalar object node
	"""
	start: Date!
	"""
	scalar object node
	"""
	end: Date
}

"""
type object node
"""
type Customer{
	"""
	String object node
	"""
	firstName: String
	"""
	String object node
	"""
	lastName: String
	"""
	ID object node
	"""
	ID: ID
}

"""
scalar object node
"""
scalar Date

type Mutation{
	createAuthor(
		author: CreateAuthorInput
	): Author!
	updateAuthor(
		author: UpdateAuthorInput
	): Author!
	updateBook(
		book: UpdateBookInput
	): Book!
	"""
	type object node
	"""
	createCustomer(
		inputNode: CreateCustomerInput
	): Customer
	"""
	type object node
	"""
	rent(
		inputNode: rentInput
	): RentABook
}

input CreateAuthorInput{
	firstName: String!
	lastName: String!
}

input UpdateAuthorInput{
	id: ID!
	firstName: String!
	lastName: String!
}

input UpdateBookInput{
	id: ID!
	name: String!
	author: String!
}

"""
input object node
"""
input CreateCustomerInput{
	"""
	String object node
	"""
	firstName: String
	"""
	String object node
	"""
	lastName: String
}

"""
input object node
"""
input rentInput{
	"""
	String object node
	"""
	customerID: String
	"""
	String object node
	"""
	bookID: String
}

input CreateBookInput{
	name: String!
	author: String!
}
schema{
	query: Query,
	mutation: Mutation
}
`;

export const App = () => {
    return (
        <div>
            <FormQL schema={schema} />
        </div>
    );
};
```

### ZeusForm

Mighty `graphql-zeus` powered form with validation field generation.

1. Generate zeus for your GraphQL schema.
2. Import `ValueTypes` from generated schema
3. You have a form with validation and full typings basing on schema and inputs

```tsx
import React from 'react';
import { PaymentType, ValueTypes } from './graphql-zeus';
import { ZeusForm } from 'graphql-react-admin';
const Form = ZeusForm<ValueTypes>({ schema });
const AddOrderForm = Form('AdminMutation', 'addOrder');

export const ZeusApp = () => {
    return (
        <div style={{ padding: 60 }}>
            <AddOrderForm
                formData={{
                    order: {
                        payment: PaymentType.CARD_ON_DELIVERY,
                        total: 12300,
                        restaurant: 'italia',
                        address: { street: 'aaa', unit: 'aa' },
                    },
                }}
                onSubmit={(e) => {
                    e.formData.order.payment;
                }}
            />
        </div>
    );
};
```

## Themes

As this form is based on `@rjsf/core` package it support its themes

```tsx
import { withTheme } from '@rjsf/core';

export const App = () => {
    return (
        <div>
            <FormQL
                FormComponent={withTheme({
                    /* Create your theme here */
                })}
                schema={schema}
            />
        </div>
    );
};
```

## Deps

Admin uses `@rjsf/core` under the hood. They have some really cool themes including `fluent`, `antd` and `material-ui`

## Development

If you would like to develop `graphql-react-admin`

```sh
git clone https://github.com/graphql-editor/graphql-react-admin
cd graphql-react-admin
npm i
npm run start
```

## Releasing

Bump version and push to develop or master to release with `@latest` or `@beta` tag.
