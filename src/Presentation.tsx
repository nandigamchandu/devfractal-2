import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import React, { useState } from 'react'
import {
  Box,
  Button,
  Icon,
  Simple,
  SimpleEditor,
  SimpleTable,
  SimpleViewer,
  Text,
} from './devfractal'
import { delay } from './utils'

// tslint:disable

const loginValues = { username: '', password: '' }

const todoList = [
  { id: 1, title: 'bring milk', done: true },
  { id: 2, title: 'go for a walk', done: false },
  { id: 3, title: 'read news', done: false },
]

const asyncTodoList = async () => {
  await delay(3000)
  return Promise.resolve(todoList)
}

const fetchTodoListUrl = 'http://localhost:3000/todos'

const fetchTodoList = async () => {
  const response = await axios.get(fetchTodoListUrl)
  return response.data
}

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

export const Counter = () => {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  return (
    <Box textAlignment="centered" shadowLess>
      <Button noControl variant="success">
        <Icon icon={faPlus} />
      </Button>
      <Text textSize="2">{count}</Text>
      <Button noControl variant="danger">
        <Icon icon={faMinus} />
      </Button>
    </Box>
  )
}

export const Presentation = () => <Counter />
