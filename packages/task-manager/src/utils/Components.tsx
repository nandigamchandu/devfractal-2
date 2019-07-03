import * as t from 'io-ts'
import React from 'react'
import { typeInvariant } from 'technoidentity-utils'
import { useRouter } from './RouterUtils'

const SingleError = t.readonly(t.type({ error: t.string }))
const Errors = t.readonly(t.type({ errors: t.readonlyArray(t.string) }))
const ServerError = t.union([t.string, SingleError, Errors])

type ServerError = t.TypeOf<typeof ServerError>

export interface ServerErrorViewProps {
  readonly error?: ServerError
}

function serverError(error: ServerError): string {
  typeInvariant(ServerError, error)

  if (t.string.is(error)) {
    return error
  }

  if (SingleError.is(error)) {
    return error.error
  }

  return error.errors.join('\n')
}

export const ServerErrorView: React.FC<ServerErrorViewProps> = ({ error }) => (
  <>
    {error && (
      <article className="message is-danger">
        <div className="message-body">{serverError(error)}</div>
      </article>
    )}
  </>
)

export const Loading: React.FC = () => (
  <h1 className="is-text is-size-1 is-info">Loading....</h1>
)

export interface ErrorViewProps {
  readonly error: Error
}

export const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
  <h1 className="is-text is-size-1 is-danger">{error.message}</h1>
)

export const NotFound: React.FC = () => {
  const { location } = useRouter()

  return <h1>{`path ${location.pathname} did not match any route`}</h1>
}
