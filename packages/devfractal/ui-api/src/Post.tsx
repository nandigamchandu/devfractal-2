import { SubmitAction, useSubmitRedirect } from 'devfractal-api'
import React from 'react'
import { ServerError } from './ServerError'

export interface PostProps<T> {
  readonly redirectPath?: string
  readonly component: React.FC<{ readonly onSubmit: SubmitAction<T> }>
  onPost(values: T): Promise<T>
}

export function Post<T>({
  redirectPath,
  onPost,
  component: Component,
}: PostProps<T>): JSX.Element {
  const { serverError, onSubmit } = useSubmitRedirect(onPost, redirectPath)

  return (
    <>
      <ServerError error={serverError} />
      <Component onSubmit={onSubmit} />
    </>
  )
}