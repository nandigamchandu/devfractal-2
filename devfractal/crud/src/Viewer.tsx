import * as t from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import React from 'react'
import { Get } from 'technoidentity-devfractal-api'
import {
  CheckBox,
  Column,
  Columns,
  formatDate,
  Section,
  Text,
  Title,
} from 'technoidentity-devfractal-ui-core'
import { camelCaseToPhrase } from 'technoidentity-utils'
import { isFunction } from './utils'

const Header: React.FC<{ readonly objectKey: string }> = ({ objectKey }) => (
  <Title size="6">{camelCaseToPhrase(objectKey)}</Title>
)

const Value: React.FC<{
  readonly objectValue: string
}> = ({ objectValue }) =>
  t.boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : date.is(objectValue) ? (
    <Text>{formatDate(objectValue)}</Text>
  ) : (
    <>{objectValue}</>
  )

export interface ViewerViewProps<T extends {}> {
  readonly data: T
}

export function ViewerView<T extends {}>({
  data,
}: ViewerViewProps<T>): JSX.Element {
  return (
    <Section>
      {Object.keys(data).map(key => (
        <Columns key={key}>
          <Column>
            <Header objectKey={key} />
          </Column>
          <Column>
            <Value objectValue={data[key]} />
          </Column>
        </Columns>
      ))}
    </Section>
  )
}

export interface ViewerProps<T extends {}> {
  readonly data: T | (() => Promise<T>)
}

export function Viewer<T extends {}>({ data }: ViewerProps<T>): JSX.Element {
  if (isFunction(data)) {
    return <Get asyncFn={data}>{data => <ViewerView data={data} />}</Get>
  }
  return <ViewerView data={data} />
}
