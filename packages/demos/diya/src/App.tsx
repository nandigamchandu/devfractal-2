import 'bulma/css/bulma.css'
import React from 'react'
import {
  All,
  Column,
  Columns,
  Create,
  Router,
  SimpleRedirect,
} from 'technoidentity-devfractal'
import { evAPI, planRouteAPI, tripAPI } from './common'
import { DispatcherSideMenu } from './components/DispatcherSideMenu'
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
