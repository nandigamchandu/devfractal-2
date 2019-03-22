import * as t from 'io-ts'
import React from 'react'
import {
  consoleSubmit,
  email,
  emptyFromType,
  max,
  min,
  required,
  Section,
  Simple,
  Title,
  typeInvariant,
} from 'technoidentity-devfractal'

// tslint:disable typedef

const CommentRT = t.readonly(
  t.type({ name: t.string, email: t.string, body: t.string }),
)

type CommentValues = t.TypeOf<typeof CommentRT>

const initialValues: CommentValues = emptyFromType(CommentRT)

export const CommentForm: React.SFC = () => (
  <Section>
    <Title>Comment Form</Title>
    <Simple.Form
      initialValues={initialValues}
      onSubmit={async (values: CommentValues, actions) => {
        typeInvariant(CommentRT, values)
        await consoleSubmit(0)(values, actions)
      }}
    >
      <Simple.Text
        label="Name"
        name="name"
        validations={[required(), min(6), max(20)]}
      />
      <Simple.Email
        label="Email"
        name="email"
        validations={[required(), email()]}
      />
      <Simple.TextArea label="Body" name="body" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
