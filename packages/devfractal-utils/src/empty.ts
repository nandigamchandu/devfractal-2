import {
  AnyArrayType,
  AnyType,
  ArrayType,
  BooleanType,
  ExactType,
  FunctionType,
  InterfaceType,
  IntersectionType,
  KeyofType,
  LiteralType,
  Mixed,
  NullType,
  NumberType,
  PartialType,
  ReadonlyArrayType,
  ReadonlyType,
  RefinementType,
  StringType,
  TupleType,
  TypeOf,
  UndefinedType,
  UnionType,
  VoidType,
} from 'io-ts'
import { buildObject, nop, today } from './common'

export function empty<T extends Mixed>(spec: T): TypeOf<T> {
  if (spec.name === 'Int' || spec instanceof NumberType) {
    return 0
  }

  if (spec instanceof StringType) {
    return ''
  }

  if (spec instanceof BooleanType) {
    return false
  }

  if (spec.name === 'Date') {
    return today()
  }

  if (spec instanceof KeyofType) {
    return Object.keys(spec.keys)[0]
  }

  if (spec instanceof FunctionType) {
    return nop
  }

  if (spec instanceof LiteralType) {
    return spec.value
  }

  if (spec instanceof NullType) {
    // tslint:disable-next-line: no-null-keyword
    return null
  }

  if (spec instanceof UndefinedType || spec instanceof VoidType) {
    return undefined
  }

  if (spec instanceof AnyType) {
    return ''
  }

  if (spec instanceof InterfaceType || spec instanceof PartialType) {
    return buildObject(spec.props, empty)
  }

  if (
    spec instanceof ExactType ||
    spec instanceof ReadonlyType ||
    spec instanceof RefinementType
  ) {
    return empty(spec.type)
  }

  if (
    spec instanceof ReadonlyArrayType ||
    spec instanceof ArrayType ||
    spec instanceof AnyArrayType
  ) {
    return []
  }

  if (spec instanceof IntersectionType) {
    return spec.types
      .map(empty)
      .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  }

  if (spec instanceof UnionType) {
    return empty(spec.types[0])
  }

  // if (spec instanceof TaggedUnionType) {
  //   return spec.types
  //     .map(empty)
  //     .reduce((acc: any, x: any) => ({ ...acc, ...x }))
  // }
  if (spec instanceof TupleType) {
    return spec.types.map(empty)
  }

  throw new Error(`Unsupported type: ${spec.name}`)
}
