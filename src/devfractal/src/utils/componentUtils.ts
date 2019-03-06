import * as t from 'io-ts'
import {
  Any,
  IntersectionC,
  Mixed,
  PartialC,
  Props,
  ReadonlyC,
  TypeC,
} from 'io-ts'
import { reporter } from 'io-ts-reporters'
import React from 'react'
import { warning } from './internal'

export const optionalProps: <P extends Props>(
  props: P,
  name?: string,
) => ReadonlyC<PartialC<P>> = props => t.readonly(t.partial(props))

export const requiredProps: <P extends Props>(
  props: P,
  name?: string,
) => ReadonlyC<TypeC<P>> = obj => t.readonly(t.type(obj))

export const props: <O extends Props, R extends Props>(
  optional: O,
  // @TODO: make 'required' optional to drop requiredProps, optionalProps
  required: R,
) => IntersectionC<[ReadonlyC<PartialC<O>>, ReadonlyC<TypeC<R>>]> = (
  optional,
  required,
) =>
  t.intersection([
    t.readonly(t.partial(optional)),
    t.readonly(t.type(required)),
  ])

export type Properties<C extends Any> = C['_A']

export const component: <
  T extends Mixed,
  P extends Properties<T> = Properties<T>
>(
  propsValue: T,
  inner: React.ComponentType<P>,
) => React.FunctionComponent<P> = (propsValue, inner) => props => {
  const v: string = reporter(propsValue.decode(props)).join('\n')
  warning(v === '', v)

  return React.createElement(inner, props)
}

// tslint:disable-next-line: no-null-keyword
export const Null: React.FunctionComponent = () => null
