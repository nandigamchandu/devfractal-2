import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Button,
  Column,
  Columns,
  Image,
  Input,
  Section,
  Text,
} from 'devfractal-ui-core'
import React from 'react'
import { MapView } from '../../maps'
import { FilterData } from '../../reacttable/FilterData'
import { Table } from '../../reacttable/Table'

// tslint:disable-next-line:readonly-array
const data = [
  {
    id: '1',
    customerName: '',
    paymentType: '',
    address: '',
    contactNumber: '',
    EDT: '',
    status: '',
    actions: '',
  },
]

export const AddCustomer: React.FC = () => (
  <>
    <Section>
      <Input leftIcon={faSearch} placeholder="search vehicle ID" />
      <Section>
        <Box>
          <Columns>
            <Column>
              <Image src="_.jpg" size="16x16" />
            </Column>
            <Column>
              <Text weight="bold">Trip ID:</Text>
              <Text>TRIP 345</Text>
            </Column>
            <Column>
              <Text weight="bold">Driver Assigned:</Text>
              <Text>Suresh</Text>
            </Column>
            <Column>
              <Text weight="bold">Battery Using:</Text>
              <Text>Battery-413</Text>
            </Column>
            <Column>
              <Text weight="bold">EV ID:</Text>
              <Text>DIYA-AUTO-465</Text>
            </Column>
            <Column>
              <Text weight="bold">Associate Assigned:</Text>
              <Text>Ramesh</Text>
            </Column>
            <Column>
              <Text weight="bold">Client Assigned:</Text>
              <Text>Ekart logistics</Text>
            </Column>
          </Columns>
        </Box>
      </Section>
      <Table
        tableData={data}
        headerNames={[
          'customerName',
          'paymentType',
          'address',
          'contactNumber',
          'EDT',
          'status',
          'actions',
        ]}
        headerLabels={{
          customerName: 'Customer Name',
          paymentType: 'Payment Type',
          address: 'Address',
          contactNumber: 'Contact Number',
          EDT: 'EDT',
          status: 'Status',
          actions: 'Actions',
        }}
        sorting={false}
        pagination={false}
      />
      <Button variant="primary" leftIcon={faPlusCircle}>
        <Text style={{ paddingLeft: '20px' }}>Add customer</Text>
      </Button>
      <Column>
        <FilterData
          tableData={data}
          component={({ data }) => <MapView data={data} />}
        />
      </Column>
    </Section>
  </>
)
