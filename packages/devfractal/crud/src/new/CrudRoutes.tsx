import { API, APIQuery } from 'devfractal-api'
import { Route } from 'devfractal-router'
import {
  Get,
  SimpleGetComponentProps,
  SimplePost,
  SimplePut,
  SimplePutComponentProps,
} from 'devfractal-ui-api'
import { Mixed, TypeOf } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import React from 'react'
import { HasProps, opt } from 'technoidentity-utils'
import { paths as resPaths } from './common'
import { useQuery } from './useQuery'

// tslint:disable-next-line: typedef
export const ClientQuery = opt({ page: IntFromString, limit: IntFromString })

interface RoutesProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly resource: string
  readonly formComponent: React.FC<SimplePutComponentProps<TypeOf<Spec>>>
  readonly listComponent: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly paths?: ReturnType<typeof resPaths>
  readonly redirectTo?: string
}

interface GetRouteProps<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly api: API<Spec & HasProps, ID>
  readonly component: React.FC<SimpleGetComponentProps<TypeOf<Spec>>>
  readonly path: string
}

function GetRoute<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  component: Component,
  path,
}: GetRouteProps<Spec, ID>): JSX.Element {
  // @TODO: what about default limit? server sets it?
  // Receive a function to convert string to query?
  const { page = 1, limit = 10 } = useQuery(ClientQuery)

  const query: APIQuery<TypeOf<Spec>> = { range: { current: page, limit } }

  async function asyncFn(
    query: APIQuery<TypeOf<Spec>>,
  ): Promise<ReadonlyArray<Spec>> {
    return api.list(query)
  }

  return (
    <Route
      path={path}
      render={() => (
        <Get asyncFn={asyncFn} deps={[query]}>
          {data => <Component data={data} />}
        </Get>
      )}
    />
  )
}

export function CrudRoutes<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  resource,
  listComponent,
  formComponent,
  paths: { edit, create, list } = resPaths(resource),
  redirectTo = list,
}: RoutesProps<Spec, ID>): JSX.Element {
  return (
    <>
      <SimplePut
        path={edit}
        api={api}
        component={formComponent}
        redirectTo={redirectTo}
      />

      <GetRoute api={api} component={listComponent} path={list} />
      {/* <SimpleGet api={api} component={listComponent} path={list} /> */}

      <SimplePost
        path={create}
        redirectTo={redirectTo}
        api={api}
        component={formComponent}
      />
    </>
  )
}