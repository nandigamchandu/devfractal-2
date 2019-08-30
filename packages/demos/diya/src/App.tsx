import 'bulma/css/bulma.css'
import React from 'react'
import { BrowserRouter, Route as Routes } from 'react-router-dom'
import {
  All,
  Column,
  Columns,
  Create,
  Route,
  Router,
  SimpleRedirect,
  Title,
} from 'technoidentity-devfractal'
import { evAPI, planRouteAPI, tripAPI } from './common'
import { SideMenu } from './components'
import { DispatcherSideMenu } from './components/DispatcherSideMenu'
import {
  BatteryRoutes,
  ClientRoutes,
  DriverRoutes,
  EmployeeRoutes,
  EVSRoutes,
  GeoFenceRoutes,
  InvoiceListRoute,
  PlanRouteMapRoute,
  TripListRoute,
  UserRoutes,
  VehicleRoutes,
} from './pages'
import { EVSList, PlanRouteList, RaiseRequestForm, TripList } from './views'

// export const App = () => (
//   <Router variant="browser">
//     <Columns>
//       <SideMenu />

//       <Column>
//         <SimpleRedirect from="/" to="/drivers" />

//         <DriverRoutes />
//         <BatteryRoutes />
//         <ClientRoutes />
//         <VehicleRoutes />
//         <EmployeeRoutes />
//         <GeoFenceRoutes />
//         <UserRoutes />
//         <EVSRoutes />

//         <InvoiceListRoute />
//         <PlanRouteMapRoute />
//         <TripListRoute />
//       </Column>
//     </Columns>
//   </Router>
// )

// export const App = () => (
//   <Router variant="browser">
//     <Columns>
//       <DispatcherSideMenu />
//       <Column>
//         <SimpleRedirect from="/" to="/evsAssigned" />
//         <PlanRouteMapRoute />
//         <TripListRoute />
//         <EVSRoutes />
//       </Column>
//     </Columns>
//   </Router>
// )

export const EVSListRoute = () => (
  <All path="/evsAssigned" api={evAPI} list={EVSList} />
)

export const RaiseRequestRoute = () => (
  <Create
    api={evAPI}
    path="/raiseRequest"
    form={RaiseRequestForm}
    redirectTo="/evsAssigned"
  />
)

export const PlaneRouteListRoute = () => (
  <All path="/planRoute" api={planRouteAPI} list={PlanRouteList} />
)

export const ViewTripListRoute = () => (
  <All path="/viewTrips" api={tripAPI} list={TripList} />
)

export const App = () => (
  <Router>
    <Columns>
      <DispatcherSideMenu />
      <Column>
        <SimpleRedirect from="/" to="/evsAssigned" />
        <EVSListRoute />
        <RaiseRequestRoute />
        <PlaneRouteListRoute />
        <ViewTripListRoute />
      </Column>
    </Columns>
  </Router>
)
// export const App = () => <Title>hello</Title>
