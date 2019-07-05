import React from 'react'
import { AnyTuple } from 'typelevel-ts'

interface AsyncResult<T extends Object> {
  readonly loading: boolean
  readonly data: T | undefined
  readonly error: Error | undefined
  refresh(): void
}

export function useGet<T extends Object, P extends AnyTuple>(
  asyncFn: (...params: P) => Promise<T>,
  ...deps: P
): // tslint:disable-next-line: readonly-array
AsyncResult<T> {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const [loading, setLoading] = React.useState(false)
  const [fetchAgain, setFetchAgain] = React.useState(0)
  const mounted: React.MutableRefObject<boolean> = React.useRef(false)

  React.useEffect(() => {
    setLoading(true)
    // setData(undefined)
    // setError(undefined)

    // tslint:disable-next-line: no-object-mutation
    mounted.current = true

    asyncFn(...deps)
      .then(data => {
        if (mounted.current) {
          setLoading(false)
          setData(data)
          setError(undefined)
        }
      })
      .catch(error => {
        if (mounted.current) {
          setLoading(false)
          // setData(undefined)
          setError(error)
        }
      })

    return () => {
      // tslint:disable-next-line: no-object-mutation
      mounted.current = false
    }
  }, [...deps, fetchAgain])

  const fetch: () => void = () => setFetchAgain(count => (count + 1) % 100)

  return { loading, data, error, refresh: fetch }
}
