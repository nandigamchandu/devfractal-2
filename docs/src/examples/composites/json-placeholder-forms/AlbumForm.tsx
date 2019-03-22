import * as t from 'io-ts'
import React from 'react'
import {
  consoleSubmit,
  emptyFromType,
  required,
  Section,
  Simple,
  Title,
  typeInvariant,
} from 'technoidentity-devfractal'

// tslint:disable typedef

const AlbumRT = t.readonly(t.type({ title: t.string }))

type AlbumValues = t.TypeOf<typeof AlbumRT>

const initialValues: AlbumValues = emptyFromType(AlbumRT)

export const AlbumForm: React.SFC = () => (
  <Section>
    <Title>Album Form</Title>
    <Simple.Form
      initialValues={initialValues}
      onSubmit={async (values: AlbumValues, actions) => {
        typeInvariant(AlbumRT, values)
        await consoleSubmit(0)(values, actions)
      }}
    >
      <Simple.Text label="Title" name="title" validations={[required()]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
