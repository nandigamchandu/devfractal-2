import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { Battery } from '../common'
import { CreateLink } from '../components'

const batteryLinks = links('batteries')

export const BatteryList = listComponent(Battery, ({ data: batteryList }) => (
  <Section>
    <Title size="4" textColor="info">
      Batteries
    </Title>
    <CreateLink to={batteryLinks.create}>Add Battery</CreateLink>

    <CrudTable
      data={batteryList}
      headers={['name', 'group', 'remainingCycles', 'status']}
      editLink={v => batteryLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))
