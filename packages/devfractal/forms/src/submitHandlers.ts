import { jsonStringify, timeout } from '@stp/utils'
import axios from 'axios'
import { FormikErrors, FormikHelpers } from 'formik'

export function consoleSubmit<Values extends {}>(
  milliseconds: number = 0,
): (values: Values, formikArgs: FormikHelpers<Values>) => Promise<void> {
  return async (values, { setSubmitting }) =>
    timeout(milliseconds, () => {
      console.log(jsonStringify(values))
      setSubmitting(false)
    })
}

interface APISubmitArgs<Values, Result extends Values> {
  readonly url: string
  readonly action?: 'post' | 'put'
  readonly noResetOnSubmit?: boolean
  errorsTransformer?(errors: unknown): FormikErrors<Values>
  responseTransformer?(response: unknown): Result
  valuesTransformer?(values: Values): unknown
}

const id: (x: unknown) => any = x => x

type APISubmitResult<Values extends {}, Result extends Values = Values> = (
  values: Values,
  actions: FormikHelpers<Values>,
) => Promise<Result>

export type ApiSubmitAction = 'post' | 'put'
// Need to create Either and AsynchronousEither
export function apiSubmit<Values extends {}, Result extends Values = Values>({
  url,
  action = 'post',
  noResetOnSubmit = false,
  valuesTransformer = id,
  responseTransformer = id,
  errorsTransformer = id,
}: APISubmitArgs<Values, Result>): APISubmitResult<Values, Result> {
  return async (values, { setValues, setErrors, setSubmitting, resetForm }) => {
    try {
      // Should handle the erroneous scenario, output keys aren't a subset of input
      const data: Values =
        action === 'post'
          ? (await axios.post(url, valuesTransformer(values))).data
          : (await axios.put(url, valuesTransformer(values))).data

      const response: Result = responseTransformer(data)
      setValues(response)
      setSubmitting(false)

      if (!noResetOnSubmit) {
        resetForm()
      }
      return response
    } catch (errors) {
      const err: FormikErrors<Values> = errorsTransformer(errors)
      setErrors(err)
      setSubmitting(false)
      return Promise.reject(err)
    }
  }
}

export function formikSubmit<Values, Result extends Values>(
  asyncFn: (values: Values) => Promise<Result>,
  resetOnSubmit: boolean = true,
): APISubmitResult<Values, Result> {
  return async (values, { setValues, setErrors, setSubmitting, resetForm }) => {
    try {
      const response: Result = await asyncFn(values)

      setValues(response)
      setSubmitting(false)

      if (resetOnSubmit) {
        resetForm()
      }

      return response
    } catch (errors) {
      setErrors(errors)
      setSubmitting(false)
      throw errors
    }
  }
}
