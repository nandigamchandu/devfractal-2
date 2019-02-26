import { Props } from 'io-ts'
import React, { FC } from 'react'
import { useAsync } from 'react-use'
import {
  Button,
  Container,
  Field,
  RowClickEvent,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
  Text,
} from '../lib'
import { emptyFromType, Repository, TVT, VT } from './internal'

interface ItemProps<T> {
  asyncFn(): Promise<T>
}

export interface ListProps<T> {
  list(): Promise<ReadonlyArray<T>>
  onCreate?(): void
  onEdit?(value: RowClickEvent<T>): void
  onDelete?(value: RowClickEvent<T>): void
}

export type CrudComponentsResult<T extends Props, V = TVT<T>> = Readonly<{
  readonly List: FC<ListProps<V>>
  readonly Create: FC
  readonly Edit: FC<ItemProps<V>>
  readonly View: FC<ItemProps<V>>
}>

export const CrudComponents: <T extends Props & { readonly id: unknown }>(
  typeValue: VT<T>, // or pass to Create?
  api: Repository<TVT<T>>,
) => CrudComponentsResult<T> = (typeValue, api) => ({
  Create: () => (
    <SimpleEditor
      data={emptyFromType(typeValue)}
      onSubmit={async values => {
        await api.create(values)
      }}
    />
  ),

  Edit: ({ asyncFn }) => {
    const { value, loading, error } = useAsync(asyncFn)
    return value ? (
      // @TODO: typed SimpleEditor/Viewer/Table would be awesome!
      <SimpleEditor
        data={value}
        onSubmit={async values => {
          await api.edit(values)
        }}
      />
    ) : loading ? (
      <h1>Loading...</h1>
    ) : (
      <Text textSize="4" textColor="danger">
        >{error ? error.message : 'Unknown Error'}
      </Text>
    )
  },

  View: ({ asyncFn }) => {
    const { value, loading, error } = useAsync(asyncFn)
    return value ? (
      <SimpleViewer data={value} />
    ) : loading ? (
      <h1>Loading...</h1>
    ) : (
      <h1>${error ? error.message : 'Unknown Error'}</h1>
    )
  },

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
  // @TODO: remove
})
