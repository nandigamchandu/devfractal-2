import { format } from 'date-fns'
import React from 'react'
import {
  CheckBox,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from 'technoidentity-devfractal'
import { Todo } from './11.Todo'

export const TodoItem: React.FC<Todo> = ({ id, title, scheduled, done }) => (
  <Tr>
    <Td>{id}</Td>
    <Td>{title}</Td>
    <Td>{format(scheduled, 'YYYY/MM/DD')}</Td>
    <Td>
      <CheckBox checked={done} readOnly />
    </Td>
  </Tr>
)

export interface TodoListViewProps {
  readonly todoList: ReadonlyArray<Todo>
}

export const TodoListView: React.FC<TodoListViewProps> = ({
  todoList: todoListProps,
}) => (
  <Table>
    <TableHead>
      <Tr>
        <Th>Id</Th>
        <Th>Title</Th>
        <Th>Scheduled</Th>
        <Th>Done</Th>
      </Tr>
    </TableHead>
    <TableBody>
      {todoListProps.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          scheduled={todo.scheduled}
          done={todo.done}
        />
      ))}
    </TableBody>
  </Table>
)
