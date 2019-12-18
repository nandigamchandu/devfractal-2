// import { CreateLink, links } from 'devfractal-crud'
import { Section } from 'devfractal-ui-core'
import { date } from 'io-ts-types/lib/date'
import React from 'react'
import { TripDetailsResponse, TripListResponse } from '../common'
import { Table } from '../reacttable/Table'
import { convert24To12, formatDate } from '../reacttable/utils'

// const tripLinks = links('trips')

export const TripDetailsTable = ({
  data,
}: {
  readonly data: TripListResponse['data']['rows']
}) => {
  const keys = data.length > 0 ? Object.keys(data[0]) : []
  const tableData = data.length
    ? data.map((tripList: TripDetailsResponse['data']) =>
        keys.reduce(
          (acc, k) => ({
            ...acc,
            [k]: date.is(tripList[k])
              ? formatDate(tripList[k])
              : k === 'startTime'
              ? convert24To12(tripList[k])
              : tripList[k],
            actions: 'actions',
          }),
          {},
        ),
      )
    : []
  return (
    <Section>
      <Table
        tableData={[
          ...((tableData as unknown) as ReadonlyArray<
            Omit<TripListResponse, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={['tripName', 'vehicleName', 'startDate', 'startTime']}
        filterOption={[{ columnName: 'tripName', filterType: 'search' }]}
        linkColumns={['tripName']}
      />
    </Section>
  )
}
