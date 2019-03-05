import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { logger } from '../../common'
import {
  Button,
  Container,
  ErrorField,
  Field as FieldGroup,
  InputField,
  Label,
} from '../../devfractal'
import { initialLoginValues, loginSchema, LoginValues } from './common'

const LoginFormInner: React.FunctionComponent<
  FormikProps<LoginValues>
> = () => (
  <Container>
    <Form>
      <FieldGroup>
        <Label>Username</Label>
        <InputField name="username" type="text" />
        <ErrorField name="username" />
      </FieldGroup>

      <FieldGroup>
        <Label>Password</Label>
        <InputField name="password" type="password" />
        <ErrorField name="password" />
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

export const FieldsLoginForm: React.FunctionComponent = () => (
  <Formik
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
    render={LoginFormInner}
    onSubmit={logger}
  />
)
