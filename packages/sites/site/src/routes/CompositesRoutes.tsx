import {
  CardApp,
  Cart,
  Counter,
  FieldsGeneralForm,
  LoginFormVariants,
  SimpleFormExample,
  SimpleTodo,
  Todo,
} from 'devfractal-examples'
import { Route, SimpleRedirect } from 'devfractal-router'
import React from 'react'

export const CompositesRoutes: React.FC = () => (
  <>
    <SimpleRedirect from="/composites" to="/composites/simple-form" />
    <Route path="/composites/simple-form" component={SimpleFormExample} />
    <Route path="/composites/general-form" component={FieldsGeneralForm} />
    <Route path="/composites/counter" component={Counter} />
    <Route path="/composites/todo" component={Todo} />
    {/* <Route path="/composites/treeview"  component={TreeViewStructure} /> */}
    <Route path="/composites/simple-todo" component={SimpleTodo} />
    <Route path="/composites/github-card" component={CardApp} />
    <Route path="/composites/cart-app" component={Cart} />
    <Route
      path="/composites/login-form-variants"
      component={LoginFormVariants}
    />
  </>
)
