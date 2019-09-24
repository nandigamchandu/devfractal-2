import { rest } from 'devfractal-api'
import { boolean, number, string, TypeOf } from 'technoidentity-utils'
import { ISODate, obj } from 'technoidentity-utils'

export const Todo = obj(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

export type Todo = TypeOf<typeof Todo>

export const todoAPI = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})
