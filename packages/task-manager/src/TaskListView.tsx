import { format } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  Field,
  Section,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Title,
  Tr,
} from 'technoidentity-devfractal'
import { Task } from './types'

interface TaskItemProps {
  readonly taskItem: Task
}

function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'DD/MM/YYYY')
}

const TaskItem: React.FC<TaskItemProps> = ({ taskItem }) => {
  return (
    <Tr>
      <Td>{taskItem.title}</Td>
      <Td>{taskItem.description}</Td>
      <Td>{formatDate(taskItem.dateInfo.started)}</Td>
      <Td>{formatDate(taskItem.dateInfo.deadline)}</Td>
      <Td>{formatDate(taskItem.dateInfo.scheduled)}</Td>
      <Td>{formatDate(taskItem.dateInfo.completed)}</Td>
      <Td>
        <Link
          to={`/edit/${taskItem._id}`}
          className="button is-primary is-link"
        >
          Edit
        </Link>
      </Td>
    </Tr>
  )
}

export interface TaskListViewProps {
  readonly taskList: ReadonlyArray<Task>
  onCompleted(): void
  onPending(): void
}

export const TaskListView: React.FC<TaskListViewProps> = ({
  taskList,
  onCompleted,
  onPending,
}) => {
  return (
    <Section>
      <Title textAlignment="centered">Task Management</Title>
      <ButtonsGroup alignment="right">
        <Link to="/add" className="button is-link">
          Add
        </Link>
      </ButtonsGroup>
      <Table striped bordered fullWidth>
        <TableHead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Started</Th>
            <Th>Deadline</Th>
            <Th>Scheduled</Th>
            <Th>Completed</Th>
            <Th />
          </Tr>
        </TableHead>
        <TableBody>
          {taskList.map(task => (
            <TaskItem key={task._id} taskItem={task} />
          ))}
        </TableBody>
      </Table>
      <Field grouped groupModifier="grouped-centered">
        <Button variant="success" onClick={onCompleted}>
          Completed
        </Button>
        <Button variant="danger" onClick={onPending}>
          Pending
        </Button>
      </Field>
    </Section>
  )
}
