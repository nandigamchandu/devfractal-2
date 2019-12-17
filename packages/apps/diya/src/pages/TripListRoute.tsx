import React from 'react'
import { Get, paths, Post, Route } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  CustomerData,
  CustomerListResponse,
  CustomerResponse,
  sessionExpire,
  tripAPI,
  TripDetailsResponse,
  TripListResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { AddCustomer } from '../views/client-dispatcher/AddCustomer'
import { CustomerForm } from '../views/client-dispatcher/AddCustomerForm'
import { TripDetailsTable } from '../views/TripsDetailsTable'

const ps = paths(tripAPI.resource)

export async function getTripList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<TripListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'trips' },
      TripListResponse,
    )
    setHeaderText('Trips')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

export async function getTripDetails({
  setUser,
  logout,
  tripId,
}: any): Promise<TripDetailsResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: `trips/${tripId}` },
      TripDetailsResponse,
    )
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

const TripList = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getTripList({ setUser, logout, setHeaderText })}
    component={TripDetailsTable}
  />
)
export async function getCustomer(
  id: string,
  { setUser, logout }: any,
): Promise<CustomerResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'customers', path: id },
      CustomerResponse,
    )
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function postCustomer(
  data: CustomerData,
  { setUser, logout }: any,
): Promise<CustomerResponse['data']> {
  try {
    const customer = await cargosUrl().post(
      { resource: 'customers' },
      data,
      CustomerResponse,
    )
    toastMessage('success', 'Customer Added')
    return customer.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

export async function getCustomerList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<CustomerListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'customers' },
      CustomerListResponse,
    )
    setHeaderText('Trips')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

// const CustomerListRoute = ({ setUser, logout, setHeaderText }: any) => (
//   <Get
//     asyncFn={() => getCustomerList({ setUser, logout, setHeaderText })}
//     component={CustomerList}
//   />
// )

const CustomerAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={CustomerForm}
    onPost={data => postCustomer(data, { setUser, logout })}
  />
)

export const TripListRoute: React.FC = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.list}
        render={() => (
          <TripList
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route path="/trips/tripDetails/:id" render={() => <AddCustomer />} />
      <Route
        path={ps.create}
        render={() => <CustomerAdd setUser={setUser} logout={logout} />}
      />
    </>
  )
}
