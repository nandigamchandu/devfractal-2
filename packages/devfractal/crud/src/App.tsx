import 'bulma/css/bulma.css'
import { rest } from 'devfractal-api'
import { Router, SimpleRedirect } from 'devfractal-router'
import { Simple } from 'devfractal-simple'
import { Section } from 'devfractal-ui-core'
import { boolean, number, string } from 'io-ts'
import React from 'react'
import { render } from 'react-dom'
import { props } from 'technoidentity-utils'
import {
  ButtonLink,
  CrudRoutes,
  CrudTable,
  formComponent,
  listComponent,
} from './new'

// tslint:disable typedef

const Todo = props({ id: number }, { title: string, done: boolean })

const api = rest(Todo, 'id', {
  resource: 'todos',
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

// api
//   .many()
//   .then(values => console.log(values))
//   .catch(err => console.error(err))

const TodoForm = formComponent(Todo, ({ initial, onSubmit }) => (
  <Simple.Form initialValues={initial} onSubmit={onSubmit}>
    <Simple.Text name="title" />
    <Simple.Checkbox name="done" />
    <Simple.FormButtons />
  </Simple.Form>
))

const TodoList = listComponent(Todo, ({ data, editTo, createTo }) => (
  <>
    <ButtonLink to={createTo} variant="primary">
      Add
    </ButtonLink>
    <CrudTable
      data={data}
      headers={['title', 'done']}
      editLink={({ id }) => editTo(id)}
    />
  </>
))

const App: React.FC = () => {
  return (
    <Router>
      <Section>
        <SimpleRedirect from="/" to="/todos" />
        <CrudRoutes api={api} form={TodoForm} list={TodoList} />
      </Section>
    </Router>
  )
}

render(<App />, document.getElementById('root'))
