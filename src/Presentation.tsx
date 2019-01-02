import React from 'react'
import { Section, Simple, SimpleTable, SimpleViewer, Title } from './devfractal'
import { SimpleEditor } from './devfractal'

// tslint:disable

const loginValues = { username: '', password: '' }

const todoList = [
  { id: 1, title: 'bring milk', done: true },
  { id: 2, title: 'go for a walk', done: false },
  { id: 3, title: 'read news', done: false },
]

export const LoginForm = () => (
  <Simple.Form initialValues={loginValues}>
    <Simple.Text name="username" />
    <Simple.Password name="password" />
    <Simple.FormButtons />
  </Simple.Form>
)

export const TodoView = () => (
  <SimpleViewer object={{ title: 'hello', done: false, id: 1000 }} />
)
export const TodoEditor = () => (
  <SimpleEditor object={{ title: 'hello', done: false, id: 1000 }} />
)

export const TodoList = () => <SimpleTable values={todoList} />

export const Presentation = () => (
  <Section>
    <Title textAlignment="centered">Devfractal!</Title>
    <LoginForm />
    <TodoEditor />
    <TodoView />
    <TodoList />
  </Section>
)
