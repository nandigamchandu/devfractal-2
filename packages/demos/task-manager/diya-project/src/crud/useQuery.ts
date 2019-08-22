import {
  InterfaceType,
  PartialC,
  ReadonlyC,
  record,
  string,
  Type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { useLocation } from 'technoidentity-devfractal'
import { cast } from 'technoidentity-utils'

interface QueryProps {
  readonly [key: string]: Type<any, string>
}

export function useQuery<P extends QueryProps>(
  spec: ReadonlyC<TypeC<P>> | ReadonlyC<PartialC<P>>,
): TypeOf<typeof spec> {
  const { search } = useLocation()
  const query = cast(record(string, string), search)

  // type systems are really weird!!!
  return spec.type instanceof InterfaceType
    ? cast(spec.type, query)
    : cast(spec.type, query)
}
