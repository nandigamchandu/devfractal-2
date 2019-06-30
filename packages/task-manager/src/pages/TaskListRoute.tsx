import React from 'react'
import { getTasks, sessionApi, TaskFilter } from '../api'
import { GET, ServerError, useSubmit } from '../utils'
import { TaskListView } from '../views'

export const TaskListRoute: React.FC = () => {
  const [filter, setFilter] = React.useState<TaskFilter>('all')
  const [serverError, onLogout] = useSubmit('/', () => sessionApi.del(''))

  return (
    <>
      <ServerError error={serverError} />
      <GET asyncFn={getTasks} param={filter}>
        {data => (
          <TaskListView
            taskList={data}
            // tslint:disable-next-line: no-unnecessary-callback-wrapper
            onLogout={() => onLogout()}
            onFilterChange={setFilter}
          />
        )}
      </GET>
    </>
  )
}