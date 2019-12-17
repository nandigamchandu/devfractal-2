import React from 'react'
import { Get, paths, Post, Route } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  CustomerData,
  CustomerListResponse,
  CustomerResponse,
  sessionExpire,
  tripAddCustomerAPI,
} from '../common'
import { toastMessage } from '../components/Message'
import { CustomerList } from '../views/client-dispatcher/AddCustomer'
import { CustomerForm } from '../views/client-dispatcher/AddCustomerForm'

const ps = paths(tripAddCustomerAPI.resource)

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

const CustomerListRoute = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getCustomerList({ setUser, logout, setHeaderText })}
    component={CustomerList}
  />
)

const CustomerAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={CustomerForm}
    onPost={data => postCustomer(data, { setUser, logout })}
  />
)

export const CustomerRoutes = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <CustomerAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.list}
        render={() => (
          <CustomerListRoute
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
    </>
  )
}
