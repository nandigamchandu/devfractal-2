// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Router,
  SafeRoute as Route,
} from 'technoidentity-devfractal'
import { SideMenu } from './components'
import {
  BatteryEditRoute,
  BatteryListRoute,
  BatteryRoute,
  ClientListRoute,
  ClientRoute,
  DriverListRoute,
  DriverRoute,
  EditClientRoute,
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
  EmployeeListRoute,
  EmployeeRoute,
  EVSAssignedRoute,
  GeoFenceListRoute,
  GeoFenceRoute,
  InvoiceListRoute,
  PlanRouteMapRoute,
  RaiseRequestRoute,
  TripListRoute,
  UserListRoute,
  UserRoute,
  VehicleRoute,
} from './pages'
import { VehicleList } from './views'

// tslint:disable-next-line: no-console no-void-expression

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <Route path="/" component={DriverListRoute} />

        <Route path="/batteries" component={BatteryListRoute} />
        <Route path="/batteries/:id/edit" component={BatteryEditRoute} />
        <Route path="/batteries/add" component={BatteryRoute} />

        <Route path="/clients" component={ClientListRoute} />
        <Route path="/clients/:id/edit" component={EditClientRoute} />
        <Route path="/clients/add" component={ClientRoute} />

        <Route path="/drivers" component={DriverListRoute} />
        <Route path="/drivers/:id/edit" component={EditDriverRoute} />
        <Route path="/drivers/add" component={DriverRoute} />

        <Route path="/users" component={UserListRoute} />
        <Route path="/users/:id/edit" component={EditUserRoute} />
        <Route path="/users/add" component={UserRoute} />

        <Route path="/vehicles" component={VehicleList} />
        <Route path="/vehicles/:id/edit" component={EditVehicleRoute} />
        <Route path="/vehicles/add" component={VehicleRoute} />

        <Route path="/employees" component={EmployeeListRoute} />
        <Route path="/employees/add" component={EmployeeRoute} />

        <Route path="/evs" component={EVSAssignedRoute} />
        <Route path="/evs/add" component={RaiseRequestRoute} />

        <Route path="/geo_fence" component={GeoFenceListRoute} />
        <Route path="/geo_fence/add" component={GeoFenceRoute} />

        <Route path="/invoices" component={InvoiceListRoute} />

        <Route path="/planRoute" component={PlanRouteMapRoute} />

        <Route path="/trips" component={TripListRoute} />
      </Column>
    </Columns>
  </Router>
)
