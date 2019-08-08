import { produce } from 'immer'
import * as t from 'io-ts'
import { cast } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<Spec extends t.Mixed, IDType extends string | number> {
  readonly idKey: IDType

  many(options?: APIMethodArgs): Promise<ReadonlyArray<t.TypeOf<Spec>>>

  one(options?: APIMethodArgs): Promise<t.TypeOf<Spec>>

  create(
    data: Omit<t.InputOf<Spec>, IDType>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>

  get(id: IDType, options?: APIMethodArgs): Promise<t.TypeOf<Spec>>

  update(
    id: IDType,
    data: t.InputOf<Spec>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>

  del(id: IDType, options?: APIMethodArgs): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (t.UnknownArray.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

function omit<T, ID extends keyof T>(obj: T, id: ID): Omit<T, ID> {
  const { [id]: _, ...result } = obj
  return result
}

interface RestArgs extends RequestConfig {
  readonly resource: string
}

export function rest<
  Spec extends t.Mixed,
  ID extends string & keyof t.TypeOf<Spec>
>(
  spec: Spec,
  id: ID /* = 'id' as any */,
  { resource, ...options }: RestArgs,
): API<Spec, t.TypeOf<Spec>[ID]> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<t.TypeOf<Spec>>> {
    return http.get({ ...options, resource }, t.readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<t.TypeOf<Spec>> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(
    data: Omit<t.InputOf<Spec>, ID>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    cast(spec, data)

    return http.post(
      { ...options, resource },
      // typescript is strange! drops 'id' even if data contains it.
      omit<t.InputOf<Spec>, ID>(data, id),
      spec,
    )
  }

  async function del(
    id: t.TypeOf<Spec>[ID],
    options?: APIMethodArgs,
  ): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: t.TypeOf<Spec>[ID],
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return one(appendId({ ...options, resource }, id))
  }

  async function update(
    id: t.TypeOf<Spec>[ID],
    data: t.InputOf<Spec>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    cast(spec, data)

    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  return { one, many, get, update, create, del, idKey: id }
}
