import { FormikActions } from 'formik'
import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  Simple,
} from 'technoidentity-devfractal'
import { obj, string, TypeOf } from 'technoidentity-utils'
import * as yup from 'yup'

export const ResetPasswordData = obj(
  {},
  {
    email: string,
  },
)

export type ResetPasswordData = TypeOf<typeof ResetPasswordData>

const ResetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('must be valid email')
    .required('this is a required field'),
})

export const ResetPasswordForm = formComponent(
  ResetPasswordData,
  ({ initial, onSubmit }) => {
    return (
      <>
        <Columns columnCentered>
          <Column>
            <Simple.Form
              initialValues={{
                ...initial,
              }}
              validationSchema={ResetPasswordSchema}
              onSubmit={(
                values: ResetPasswordData,
                actions: FormikActions<ResetPasswordData>,
              ) => {
                const resetPasswordData = {
                  ...values,
                }
                onSubmit(resetPasswordData, actions)
              }}
            >
              <Simple.Text name="email" />
              <Simple.FormButtons submit={'Change'} />
            </Simple.Form>
          </Column>
        </Columns>
      </>
    )
  },
)
