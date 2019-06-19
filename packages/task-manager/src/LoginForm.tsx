import { Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import * as yup from 'yup'

interface LoginValues {
  readonly name: string
  readonly email: string
}

const schema = yup.object().shape({
  name: yup.string().required(),

  email: yup
    .string()
    .email()
    .required(),
})

export const initialValues: LoginValues = { name: '', email: '' }

const InnerLoginForm: React.FC<FormikProps<LoginValues>> = () => (
  <Form>
    <label>Name</label>
    <Field name="name" type="text" />
    <label>Email</label>
    <Field name="email" type="email" />
    <button type="submit">Submit</button>
  </Form>
)

export interface LoginFormProps {
  onLogin(values: LoginValues): Promise<void>
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={async (values, actions) => {
      await onLogin(values)
      actions.setSubmitting(false)
    }}
    component={InnerLoginForm}
  />
)
