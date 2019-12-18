import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { CreateLink } from 'devfractal-crud'
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
import { useRouteMatch } from 'react-router'
import { useHistory } from 'technoidentity-devfractal'
import { useAuth } from '../../auth/AuthContext'
import {
  CustomerData,
  // CustomerListResponse,
  CustomerListResponse,
  TripDetailsResponse,
} from '../../common'
import diyaAuto from '../../images/diyaAuto.png'
// import { MapView } from '../../maps'
// import { MapView } from '../../maps'
import { getTripCustomers, getTripDetails } from '../../pages'
// import { FilterData } from '../../reacttable/FilterData'
// import { FilterData } from '../../reacttable/FilterData'
import { Table } from '../../reacttable/Table'

// export const CustomerList = ({
//   data,
// }: {
//   readonly data: CustomerListResponse['data']['rows']
// }) => {
//   const tableData = data.map(data => ({
//     ...data,
//   }))
//   return (
//     <Section>
//       <Table
//         tableData={[
//           ...((tableData as unknown) as ReadonlyArray<
//             Omit<CustomerData, 'id'> & { readonly id: string }
//           >),
//         ]}
//         sorting={true}
//         pagination={true}
//         headerNames={[
//           'customerName',
//           'paymentType',
//           'address',
//           'contactNumber',
//           'EDT',
//           'status',
//         ]}
//         filterOption={[{ columnName: 'name', filterType: 'search' }]}
//       />
//       <CreateLink alignment="right" variant="primary" to="/trips/new">
//         Add Customer
//       </CreateLink>
//     </Section>
//   )
// }

export const AddCustomer: React.FC = () => {
  const { setHeaderText, setUser, logout, setTripData } = useAuth()
  const { params }: any = useRouteMatch()
  const history = useHistory()
  const [tripDetails, setTripDetails] = React.useState<
    TripDetailsResponse['data']
  >()
  const [customerData, setCustomerData] = React.useState<
    CustomerListResponse['data']['rows']
  >()
  const tripId = params.id
  React.useMemo(async () => {
    const vehicleData: TripDetailsResponse['data'] = await getTripDetails({
      setUser,
      logout,
      tripId,
    })
    const customerData = await getTripCustomers({ tripId, setUser, logout })
    setCustomerData(customerData)
    setTripDetails(vehicleData)
    setTripData({
      vehicleId: vehicleData.vehicleId,
      id: vehicleData.id ? vehicleData.id : '',
    })
    setHeaderText('Trip Details')
  }, [setHeaderText, logout, setUser, setTripData, tripId])
  return (
    <>
      <Button
        textAlignment="left"
        variant="primary"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
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
        {customerData ? (
          <Table
            tableData={[
              ...((customerData as unknown) as ReadonlyArray<
                Omit<CustomerData, 'id'> & { readonly id: string }
              >),
            ]}
            sorting={true}
            pagination={true}
            headerNames={[
              'name',
              'paymentType',
              'address',
              'contactNumber',
              'estimatedDeliveryTime',
              'deliveryStatus',
            ]}
            filterOption={[{ columnName: 'name', filterType: 'search' }]}
          />
        ) : (
          <></>
        )}

        <CreateLink alignment="right" variant="primary" to="/trips/new">
          Add Customer
        </CreateLink>
      </Section>
    </>
  )
}
