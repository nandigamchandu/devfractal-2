import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { CreateLink, links } from 'devfractal-crud'
import {
  Box,
  Column,
  Columns,
  Image,
  Input,
  Section,
  Text,
} from 'devfractal-ui-core'
import React from 'react'
import { useAuth } from '../../auth/AuthContext'
import {
  CustomerData,
  CustomerListResponse,
  TripDetailsResponse,
} from '../../common'
import diyaAuto from '../../images/diyaAuto.png'
// import { MapView } from '../../maps'
import { getTripDetails } from '../../pages'
// import { FilterData } from '../../reacttable/FilterData'
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
  },
]

const customerLinks = links('trips')

export const CustomerList = ({
  data: customerList,
}: {
  readonly data: CustomerListResponse['data']['rows']
}) => {
  const tableData = customerList.map(data => ({
    ...data,
  }))
  return (
    <Section>
      <Table
        tableData={[
          ...((tableData as unknown) as ReadonlyArray<
            Omit<CustomerData, 'id'> & { readonly id: string }
          >),
        ]}
        sorting={true}
        pagination={true}
        headerNames={[
          'customerName',
          'paymentType',
          'address',
          'contactNumber',
          'EDT',
          'status',
        ]}
        filterOption={[{ columnName: 'name', filterType: 'search' }]}
      />
      <CreateLink alignment="right" variant="primary" to={customerLinks.create}>
        Add Customer
      </CreateLink>
    </Section>
  )
}

export const AddCustomer: React.FC = () => {
  const { tripData, setHeaderText, setUser, logout } = useAuth()
  console.log(tripData)
  const [tripDetails, setTripDetails] = React.useState<
    TripDetailsResponse['data']
  >()
  React.useMemo(async () => {
    const vehicleData: TripDetailsResponse['data'] = await getTripDetails({
      setUser,
      logout,
      tripId: tripData.id,
    })
    setTripDetails(vehicleData)
    setHeaderText('Trip Details')
  }, [tripData, setHeaderText, logout, setUser])
  console.log(tripDetails)
  return (
    <>
      <Section>
        <Input leftIcon={faSearch} placeholder="search vehicle ID" />
        <Section>
          <Box>
            <Columns>
              <Column>
                <Image src={diyaAuto} size="96x96" />
              </Column>
              <Column>
                <Text weight="bold">Trip ID:</Text>
                <Text>{tripDetails && tripDetails.tripName}</Text>
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
                <Text>{tripDetails && tripDetails.vehicleName}</Text>
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
        <CustomerList data={data} />
        {/* <Table
          tableData={[...data]}
          headerNames={[
            'customerName',
            'paymentType',
            'address',
            'contactNumber',
            'EDT',
            'status',
            'actions',
          ]}
          // headerLabels={{
          //   customerName: 'Customer Name',
          //   paymentType: 'Payment Type',
          //   address: 'Address',
          //   contactNumber: 'Contact Number',
          //   EDT: 'EDT',
          //   status: 'Status',
          //   actions: 'Actions',
          // }}
          sorting={false}
          pagination={false}
        />
         <CreateLink alignment="right" variant="primary" to={customerLinks.create}>
        Add Customer
      </CreateLink>
        {/* <Column>
          <FilterData
            tableData={data}
            component={({ data }) => <MapView data={data} />}
          />
        </Column> */}
      </Section>
    </>
  )
}
