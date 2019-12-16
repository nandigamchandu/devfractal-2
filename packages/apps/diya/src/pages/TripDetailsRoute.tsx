import React from 'react'
import { Get, paths, Route } from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
// import { useAuth } from '../auth/AuthContext'
import {
  cargosUrl,
  sessionExpire,
  tripDetailsAPI,
  TripDetailsResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { AddCustomer } from '../views/client-dispatcher/AddCustomer'
// import { TripDetailsTable } from '../views/TripsDetailsTable'

const ps = paths(tripDetailsAPI.resource)

export async function getTripDetails({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<TripDetailsResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'trips' },
      TripDetailsResponse,
    )
    setHeaderText('Trips Details')
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

const TripDetails = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getTripDetails({ setUser, logout, setHeaderText })}
    component={AddCustomer}
  />
)

export const TripDetailsRoute: React.FC = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.list}
        render={() => (
          <TripDetails
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
    </>
  )
}
