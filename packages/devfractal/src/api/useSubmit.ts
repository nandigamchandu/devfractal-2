import { FormikActions } from 'formik'
import { History } from 'history'
import React from 'react'
import { useHistory } from '../router'

export interface SubmitResult<T extends Object> {
  readonly serverError: string | undefined
  onSubmit(values: T, actions: FormikActions<T>): Promise<void>
}

export function useSubmit<T extends Object>(
  asyncFn: (formValues: T) => Promise<T>,
  onSuccess: (values: T, actions: FormikActions<T>) => void,
  onFailure?: (err: any, actions: FormikActions<T>) => void,
): SubmitResult<T> {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  async function onSubmit(values: T, actions: FormikActions<T>): Promise<void> {
    // tslint:disable-next-line: no-floating-promises
    asyncFn(values)
      .then(values => onSuccess(values, actions))
      .catch(err => {
        if (err && err.response && err.response.data) {
          setServerError(err.response.data.error)
        }
        if (onFailure) {
          onFailure(err, actions)
        }
      })
      .finally(() => actions.setSubmitting(false))
  }

  return { serverError, onSubmit }
}

export function useRedirect(): { onRedirect(path?: string): void } {
  const history: History = useHistory()

  return {
    onRedirect: (path?: string) => {
      if (path) {
        history.push(path)
      }
    },
  }
}

export function useSubmitRedirect<T extends Object>(
  asyncFn: (formValues: T) => Promise<T>,
  redirectPath?: string,
): SubmitResult<T> {
  const { onRedirect } = useRedirect()
  return useSubmit(asyncFn, () => onRedirect(redirectPath))
}

export function useSubmitReset<T extends Object>(
  asyncFn: (formValues: T) => Promise<T>,
  noReset?: boolean,
): SubmitResult<T> {
  return useSubmit(asyncFn, (_, actions) => {
    if (!noReset) {
      actions.resetForm()
    }
  })
}