import { FormikActions } from 'formik'
import React from 'react'
import { verify } from 'technoidentity-utils'
import { AuthUserInfo } from '../common'
import { LoginValues } from '../views'

export interface TripData {
  readonly id: string
  // readonly isActive: boolean
  // readonly startDate: ISODate
  // readonly startTime: string
  // readonly tripStatus: string
  readonly vehicleId: string
}
interface AuthContext<T, R> {
  readonly user: R | null
  readonly setUser: React.Dispatch<R | null>
  readonly setCount: React.Dispatch<number>
  readonly noOfLoginAttempts: number
  readonly headerText: string
  readonly setHeaderText: React.Dispatch<string | null>
  readonly tripData: TripData
  readonly setTripData: React.Dispatch<TripData>
  login(
    values: T,
    actions: FormikActions<LoginValues>,
    setCount: React.Dispatch<number>,
    noOfLoginAttempts: number,
  ): Promise<R>
  logout(): void
}

const AuthContext = React.createContext<
  AuthContext<LoginValues, AuthUserInfo> | undefined
>(undefined)

interface AuthProviderProps<T, R> extends AuthContext<T, R> {}

export const AuthProvider: React.FC<
  AuthProviderProps<LoginValues, AuthUserInfo>
> = ({
  user,
  setUser,
  login,
  logout,
  setCount,
  noOfLoginAttempts,
  children,
  headerText,
  setHeaderText,
  tripData,
  setTripData,
}) => {
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        setCount,
        noOfLoginAttempts,
        headerText,
        setHeaderText,
        tripData,
        setTripData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContext<LoginValues, AuthUserInfo> {
  const context = React.useContext(AuthContext)
  verify(context !== undefined)

  return context as AuthContext<LoginValues, AuthUserInfo>
}
