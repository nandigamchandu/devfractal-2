import React from 'react'
import { Table } from '../../reacttable/Table'

export const InvoicesReport: React.FC = () => {
  const data = [
    {
      id: '1',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
    {
      id: '2',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
    {
      id: '3',
      clientName: 'Amazon',
      billingType: 'Monthly',
      dueOn: '10/10/2019',
      renewBy: '20/09/2019',
    },
  ]
  return (
    <>
      <Table
        tableData={data}
        sorting={true}
        pagination={true}
        headerNames={['clientName', 'billingType', 'dueOn', 'renewBy']}
      />
    </>
  )
}
