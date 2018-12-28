import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { Button, Field as FieldGroup, Label } from '../../../form'
import { FormikInput } from '../../../formik'
import { FormikError } from '../../../formik/Controls'
import { Container } from '../../../layout'
import { logger } from '../../common'
import { initialLoginValues, loginSchema, LoginValues } from './common'

export const LoginFormInner: React.SFC<FormikProps<LoginValues>> = () => (
  <Container>
    <Form>
      <FieldGroup>
        <Label>Username</Label>
        <Field name="username" type="text" component={FormikInput} />
        <ErrorMessage name="username" component={FormikError} />
      </FieldGroup>

      <FieldGroup>
        <Label>Password</Label>
        <Field name="password" type="password" component={FormikInput} />
        <ErrorMessage name="password" component={FormikError} />
      </FieldGroup>

      <FieldGroup groupModifier="grouped-centered">
        <Button type="submit" variant="info">
          Submit
        </Button>
        <Button type="reset" variant="danger">
          Reset
        </Button>
      </FieldGroup>
    </Form>
  </Container>
)

export const LoginForm: React.SFC = () => (
  <Formik
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    render={LoginFormInner}
    onSubmit={logger}
  />
)
