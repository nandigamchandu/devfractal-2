import React from 'react'
import { Route } from 'react-router-dom'
import {
  RoutedTabs,
  RoutedTabsItem,
  Section,
  SimpleRedirect,
  Title,
} from '../devfractal'
import {
  FieldsLoginForm,
  FormikLoginForm,
  SimpleLoginForm,
} from './login-form-variants'

export const LoginFormVariantsTab: React.SFC = () => (
  <>
    <Section>
      <Title size="4" textAlignment="centered">
        Login form variants
      </Title>
    </Section>
    <RoutedTabs
      tabsStyle="boxed"
      to="/composites/login-form-variants"
      size="medium"
    >
      <RoutedTabsItem value="formik-form">Formik login form</RoutedTabsItem>
      <RoutedTabsItem value="fields-form">Fields login form</RoutedTabsItem>
      <RoutedTabsItem value="simple-form">Simple login form</RoutedTabsItem>
    </RoutedTabs>
  </>
)

export const LoginFormVariants: React.SFC = () => <LoginFormVariantsTab />

export const LoginFormVariantsRoutes: React.SFC = () => (
  <>
    <SimpleRedirect
      exact
      from="/composites/login-form-variants"
      to="/composites/login-form-variants/formik-form"
    />
    <Route
      path="/composites/login-form-variants/"
      component={LoginFormVariantsTab}
    />
    <Route
      path="/composites/login-form-variants/formik-form"
      exact
      component={FormikLoginForm}
    />
    <Route
      path="/composites/login-form-variants/fields-form"
      exact
      component={FieldsLoginForm}
    />

    <Route
      path="/composites/login-form-variants/simple-form"
      exact
      component={SimpleLoginForm}
    />
  </>
)
