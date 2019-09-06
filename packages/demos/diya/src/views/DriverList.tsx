import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Driver } from '../common'
import { HeadTitle } from '../components'

const driverLinks = links('drivers')

export const DriverList = listComponent(Driver, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink alignment="right" variant="primary" to={driverLinks.create}>
      Add Driver
    </CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editTo={v => driverLinks.edit(v.id)}
      headerLabels={['name', 'lastActive', 'shift', 'status']}
    />

    <RoutedPager />
  </Section>
))
