import { produce } from 'immer'
import { Mixed, readonlyArray, Type } from 'io-ts'
import { Array } from 'tcomb'
import { typeInvariant } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
interface API<
  A extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
> {
  many(options?: APIMethodArgs): Promise<readonly A[]>
  one(options?: APIMethodArgs): Promise<A>
  create(data: I, options?: APIMethodArgs): Promise<A>
  get(id: string, options?: APIMethodArgs): Promise<A>
  update(id: string, data: I, options?: APIMethodArgs): Promise<A>
  del(id: string, options?: APIMethodArgs): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (Array.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

interface RestArgs<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
> extends RequestConfig {
  readonly resource: string
  readonly type: Mixed & Type<A, O, I>
}

export function rest<
  A extends Record<string, any>,
  O extends Record<string, any>,
  I extends Record<string, any> | unknown = unknown
>(args: RestArgs<A, O, I>): API<A, I> {
  const { resource, type, ...options } = args

  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(options: APIMethodArgs): Promise<ReadonlyArray<A>> {
    return http.get({ ...options, resource }, readonlyArray(type))
  }

  async function one(options: APIMethodArgs): Promise<A> {
    return http.get({ ...options, resource }, type)
  }

  async function create(data: I, options: APIMethodArgs): Promise<A> {
    typeInvariant(type, data)

    return http.post({ ...options, resource }, data, type)
  }

  async function del(id: string, options?: APIMethodArgs): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(id: string, options: APIMethodArgs): Promise<A> {
    return one(appendId({ ...options, resource }, id))
  }

  async function update(
    id: string,
    data: I,
    options: APIMethodArgs,
  ): Promise<A> {
    typeInvariant(type, data)

    return http.put(appendId({ ...options, resource }, id), data, type)
  }

  return { one, many, get, update, create, del }
}