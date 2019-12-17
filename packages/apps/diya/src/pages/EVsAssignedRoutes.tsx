import React from 'react'
import { Get, paths, Post, Route, useHistory } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  EVsAddTripResponse,
  evsAssignedAPI,
  EVsAssignedResponse,
  EVsTripData,
  sessionExpire,
} from '../common'
import { toastMessage } from '../components/Message'
import { AddTripForm } from '../views/AddTripForm'
// import { AddCustomer } from '../views/client-dispatcher/AddCustomer'
import { EVsAssignedList } from '../views/EVsAssignedList'

const ps = paths(evsAssignedAPI.resource)

export async function getEVsAssignedList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<EVsAssignedResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'vehicles/assign/clients' },
      EVsAssignedResponse,
    )
    setHeaderText('EVS Assigned')
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

export async function postEVsAddTrip(
  data: EVsTripData,
  setUser: any,
  logout: any,
  push: any,
): Promise<EVsAddTripResponse['data']> {
  try {
    const evsData = await cargosUrl().post(
      { resource: 'trips' },
      data,
      EVsAddTripResponse,
    )
    toastMessage('success', 'Trip Added')
    push(`/trips/tripDetails/${evsData.data.id}`)
    return evsData.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

const EVsList = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getEVsAssignedList({ setUser, logout, setHeaderText })}
    component={EVsAssignedList}
  />
)
const EVsAddTrip = ({ setUser, logout }: any) => {
  const { push } = useHistory()
  return (
    <Post
      // redirectTo={`/trips/tripDetails:${undefined}`}
      component={AddTripForm}
      onPost={data => postEVsAddTrip(data, setUser, logout, push)}
    />
  )
}

export const EVsAssignedRoutes: React.FC = () => {
  const { logout, setUser, setHeaderText } = useAuth()

  return (
    <>
      <Route
        path={ps.list}
        render={() => (
          <EVsList
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route
        path="/evs_assigned/addTrip/:id"
        render={() => <EVsAddTrip setUser={setUser} logout={logout} />}
      />
      {/* <Route path="/evs_assigned/tripDetails" render={() => <AddCustomer />} /> */}
    </>
  )
}
