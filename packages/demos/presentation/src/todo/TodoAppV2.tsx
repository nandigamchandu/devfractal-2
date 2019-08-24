import React from 'react'
import {
  Get,
  Post,
  Put,
  Simple,
  SubmitAction,
  Title,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoForm: React.FC<TodoFormProps> = ({ initial, onSubmit }) => (
  <>
    <Title textAlignment="centered">Create/Update Todo</Title>
    <Simple.Form initialValues={initial || empty(Todo)} onSubmit={onSubmit}>
      <Simple.Text name="title" />
      <Simple.Checkbox name="done" />
      <Simple.Date name="scheduled" />
    </Simple.Form>
  </>
)

const CreateTodo = () => (
  <Post<Todo>
    component={TodoForm}
    onPost={todoAPI.create}
    redirectTo="/todos"
  />
)

interface EditTodoProps {
  readonly id: number
}

const EditTodo: React.FC<EditTodoProps> = ({ id }) => (
  <Put<Todo, 'id'>
    id={id}
    doGet={todoAPI.get}
    onPut={todoAPI.update}
    component={TodoForm}
    redirectTo="/todos"
  />
)

const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={() => todoAPI.many()}>
      {data => <TodoTable data={data} />}
    </Get>
  </>
)

export { CreateTodo, EditTodo, TodoList }
