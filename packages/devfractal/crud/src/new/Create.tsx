import { API } from 'devfractal-api'
import { Route } from 'devfractal-router'
import { Post, SubmitAction } from 'devfractal-ui-api'
import React from 'react'
import { Mixed, TypeOf } from 'technoidentity-utils'

// tslint:disable no-unbound-method

export interface CreateProps<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> {
  readonly path: string
  readonly redirectTo?: string
  readonly form: React.FC<{ readonly onSubmit: SubmitAction<TypeOf<Spec>> }>
  readonly api: API<Spec, ID>
}

function Children<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  api,
  redirectTo,
  form: Component,
}: Omit<CreateProps<Spec, ID>, 'path'>): JSX.Element {
  return (
    <Post component={Component} onPost={api.create} redirectTo={redirectTo} />
  )
}

export function Create<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  path,
  ...props
}: CreateProps<Spec, ID>): JSX.Element {
  return path ? (
    <Route path={path} render={() => <Children {...props} />} />
  ) : (
    <Children {...props} />
  )
}
