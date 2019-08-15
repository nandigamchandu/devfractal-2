import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, Get, Section, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Actions, Client, clientAPI } from '../common'
import { CreateLink, HeadTitle, StaticPagination } from '../components'

export const ClientListProps = req({ clientList: readonlyArray(Client) })

export const ClientListView = component(ClientListProps, ({ clientList }) => (
  <Section>
    <HeadTitle>Clients</HeadTitle>

    <CreateLink to="/clients/add">Add Client</CreateLink>

    <SimpleTable
      data={clientList}
      striped
      headers={[
        'clientName',
        'contractType',
        'email',
        'numberOfEVS',
        'rateOfEVS',
        'assignedEVSHistory',
        'Actions',
      ]}
      headerLabels={[
        'Client Name',
        'Contract Type',
        'Email',
        'No. of EVS',
        'Rate of EVS',
        'Assigned EVS History',
        'Actions',
      ]}
    >
      {(key, values) =>
        key === 'Actions' ? (
          <Actions editURL={`/clients/${values.id}/edit`} />
        ) : // tslint:disable-next-line: no-null-keyword
        null
      }
    </SimpleTable>

    <StaticPagination />
  </Section>
))

export const ClientList: React.FC = () => (
  <Get asyncFn={async () => clientAPI.many()}>
    {data => <ClientListView clientList={data} />}
  </Get>
)
