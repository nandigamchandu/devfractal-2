import { API, APIQuery } from 'devfractal-api'
import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-utils'
import { GotProps } from 'technoidentity-utils'
import { All, AllComponentProps } from './All'
import { paths as resPaths } from './common'
import { Create } from './Create'
import { Edit, EditComponentProps } from './Edit'

export interface CrudRoutesProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly api: API<Spec & GotProps, ID>
  readonly form: React.FC<EditComponentProps<TypeOf<Spec>>>
  readonly list: React.FC<AllComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectTo?: string
  queryFn?(search: string): APIQuery<TypeOf<Spec>>
}

export function CrudRoutes<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  list,
  form,
  paths = resPaths(api.resource),
  redirectTo = paths.list,
}: CrudRoutesProps<Spec, ID>): JSX.Element {
  const { create, edit, list: listPath } = paths

  return (
    <>
      <Edit path={edit} api={api} form={form} redirectTo={redirectTo} />
      <All api={api} list={list} path={listPath} />
      <Create path={create} redirectTo={redirectTo} api={api} form={form} />
    </>
  )
}
