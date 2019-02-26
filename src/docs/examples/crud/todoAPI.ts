import { Either } from 'fp-ts/lib/Either'
import { Errors } from 'io-ts'
import { assert, Number } from 'tcomb'
import { rejected, Repository, toPromise } from '../devfractal'
import { fakeTodoList } from './fakeData'
import { Todo, TodoListValue, TodoValue } from './types'

// tslint:disable no-let

let staticTodoList: ReadonlyArray<Todo> = fakeTodoList(5)
let nextID: number = 1000

export const InMemoryAPI: Repository<Todo> = {
  all: async () => toPromise(TodoListValue.decode(staticTodoList)),

  one: async id => {
    return toPromise(TodoValue.decode(staticTodoList.find(t => t.id === +id)))
  },

  create: async value => {
    const todo: Either<Errors, Todo> = TodoValue.decode({
      id: nextID,
      ...value,
    })

    if (todo.isRight()) {
      staticTodoList = [...staticTodoList, todo.value]
      return todo.value
    }
    ++nextID
    return rejected(todo)
  },

  edit: async value => {
    const i: number = staticTodoList.findIndex(t => t.id === +value.id)
    if (i === -1) {
      return rejected(`no todo with id: ${nextID}`)
    }
    staticTodoList = [value, ...staticTodoList.slice(1)]
    return value
  },

  remove: async id => {
    assert(Number.is(id))

    const i: number = staticTodoList.findIndex(t => id === t.id)
    if (i === -1) {
      return rejected(`no todo with id: ${id}`)
    }

    const todo: Todo = staticTodoList[i]
    staticTodoList = [
      ...staticTodoList.slice(0, i),
      ...staticTodoList.slice(i + 1),
    ]
    return todo
  },
}
