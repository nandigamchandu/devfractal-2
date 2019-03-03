import { FormikActions } from 'formik'
import { Props } from 'io-ts'
import React, { FC } from 'react'
import {
  Button,
  Container,
  Field,
  Omit,
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
} from '../lib'
import { emptyFromType, TVT, VT } from './internal'

export interface EditProps<T> {
  readonly data: T | (() => Promise<T>)
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ViewProps<T> {
  readonly data: T | (() => Promise<T>)
}

export interface CreateProps<T> {
  onSubmit?(values: T, actions: FormikActions<T>): void
}

export interface ListProps<T> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export type CrudComponentsResult<
  T extends Props,
  ID extends keyof T
> = Readonly<{
  readonly List: FC<ListProps<TVT<T>>>
  readonly Create: FC<CreateProps<Omit<TVT<T>, ID>>>
  readonly Edit: FC<EditProps<TVT<T>>>
  readonly View: FC<ViewProps<TVT<T>>>
}>

export const CrudComponents: <T extends Props, ID extends keyof T>(
  // cannot pass this to create, as getting type from typeValue is easy,
  // not the other way round
  typeValue: VT<T>,
  id: keyof T,
) => CrudComponentsResult<T, ID> = (typeValue, id) => ({
  Create: ({ onSubmit }) => (
    <SimpleEditor
      id={id}
      data={emptyFromType(typeValue, id)}
      onSubmit={onSubmit}
    />
  ),

  Edit: ({ data, onSubmit }) => (
    <SimpleEditor id={id} data={data} onSubmit={onSubmit} />
  ),

  View: ({ data }) => <SimpleViewer data={data} />,

  List: ({ list, onCreate, onEdit }) => (
    <Container>
      <Field groupModifier="grouped-right">
        <Button variant="primary" onClick={onCreate}>
          New
        </Button>
      </Field>
      <SimpleTable data={list} onRowClicked={onEdit} />
    </Container>
  ),
})
