import { startOfDay } from 'date-fns'
import { assert } from 'tcomb'

// tslint:disable no-loop-statement no-array-mutation no-object-mutation no-null-keyword

export function freeze<T>(v: T): Readonly<T> {
  return process.env.NODE_ENV !== 'production' ? Object.freeze(v) : v
}

export function jsonStringify(obj: object): string {
  return JSON.stringify(obj, null, 2)
}

export function nop(..._: any[]): any {
  return undefined
}

function rangeInternal(
  start: number,
  stop: number,
  step: number = 1,
): ReadonlyArray<number> {
  assert(step > 0)

  const result: number[] = []
  for (let i: number = start; i < stop; i += step) {
    result.push(i)
  }
  return result
}

export function range(
  start: number,
  stop?: number,
  step?: number,
): ReadonlyArray<number> {
  return stop ? rangeInternal(start, stop, step) : rangeInternal(0, start)
}

export function repeatedly<T>(
  n: number,
  f: (index: number) => T,
): ReadonlyArray<T> {
  const result: T[] = []
  for (let i: number = 0; i < n; i++) {
    result.push(f(i))
  }
  return result
}

export const buildArray: typeof repeatedly = repeatedly

export function buildObject<T extends Object, R>(
  obj: T,
  f: (value: T[typeof key], key: keyof T) => R,
): Record<keyof T, R> {
  const result: any = {}
  for (const k of keys(obj)) {
    const v: any = f(obj[k], k)
    if (v !== undefined) {
      result[k] = v
    }
  }
  return result
}

export function keys<T extends Object>(obj: T): ReadonlyArray<keyof T> {
  return Object.keys(obj) as ReadonlyArray<keyof T>
}

export function today(): Date {
  return startOfDay(new Date())
}
