import React from 'react'
import { Get } from 'technoidentity-devfractal-api'
import {
  Table,
  TableBody,
  TableHead,
  Th,
  Tr,
} from 'technoidentity-devfractal-ui-core'
import { FSTodoItem } from './FSTodoItem'
import { all, FSTodo, remove } from './todoAPI'

// tslint:disable typedef

export interface FSTodoListProps {
  readonly todoList: ReadonlyArray<FSTodo>
  onDeleteTodo(id: string): void
}

export const FSTodoListView: React.FC<FSTodoListProps> = ({
  todoList,
  onDeleteTodo,
}) => {
  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Done</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {todoList.map(todo => (
          <FSTodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </TableBody>
    </Table>
  )
}

const useUpdate = () => {
  const [toggle, set] = React.useState(false)
  const update = () => {
    set(!toggle)
  }
  return update
}

export const FSTodoList: React.FC = () => {
  const update = useUpdate()
  const handleDelete = async (id: string) => {
    await remove(id)
    console.log('handleDelete')
    update()
  }

  console.log('render')
  return (
    // tslint:disable-next-line: no-unnecessary-callback-wrapper
    <Get asyncFn={all}>
      {data => <FSTodoListView todoList={data} onDeleteTodo={handleDelete} />}
    </Get>
  )
}
