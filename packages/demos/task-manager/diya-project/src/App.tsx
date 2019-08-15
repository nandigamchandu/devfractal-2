// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Image,
  Router,
  SafeRoute as Route,
  Section,
} from 'technoidentity-devfractal'
import diyaLogo from './images/diyaLogo.png'
import { EmployeeRoute, RaiseRequestRoute } from './pages'
import {
  EmployeeListRoute,
  InvoiceListRoute,
  MenuComponentRoute,
  PlanRouteMapRoute,
  TripListRoute,
} from './views'
import { EVsAssignedRoute } from './views/EVSAssigned'

// tslint:disable-next-line: no-console no-void-expression

export const SideMenu = () => (
  <Column
    narrow
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Section>
      <Image src={diyaLogo} alt="diyaImage" size="96x96" />
    </Section>
    <MenuComponentRoute />
  </Column>
)

// export const App = () => (
//   <Router variant="browser">
//     <Columns>
//       <Route exact={false} path="/" component={SideMenu} />
//       <Column>
//         <Route path="/" component={DriverList} />
//         <Route path="/clients" component={ClientList} />
//         <Route path="/clients/add" component={ClientRoute} />
//         <Route path="/clients/:id/edit" component={EditClientRoute} />
//         <Route path="/users" component={UserList} />
//         <Route path="/users/add" component={UserRoute} />
//         <Route path="/users/:id/edit" component={EditUserRoute} />
//         <Route path="/geo_fence" component={GeoFenceList} />
//         <Route path="/geo_fence/add" component={GeoFenceRoute} />
//         <Route path="/vehicles" component={VehicleList} />
//         <Route path="/vehicles/add" component={VehicleRoute} />
//         <Route path="/vehicles/:id/edit" component={EditVehicleRoute} />
//         <Route path="/batteries" component={BatteryList} />
//         <Route path="/batteries/add" component={BatteryRoute} />
//         <Route path="/batteries/:id/edit" component={EditBatteryRoute} />
//         <Route path="/drivers" component={DriverList} />
//         <Route path="/drivers/add" component={DriverRoute} />
//         <Route path="/drivers/:id/edit" component={EditDriverRoute} />
//       </Column>
//     </Columns>
//   </Router>
// )

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <Route path="/" component={EmployeeListRoute} />
        <Route path="/evs" component={EVsAssignedRoute} />
        <Route path="/evs/add" component={RaiseRequestRoute} />
        <Route path="/invoices" component={InvoiceListRoute} />
        <Route path="/planRoute" component={PlanRouteMapRoute} />
        <Route path="/trips" component={TripListRoute} />
        <Route path="/employees/add" component={EmployeeRoute} />
      </Column>
    </Columns>
  </Router>
)
