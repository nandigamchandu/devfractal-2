import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Driver } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { CrudTable, links, listProps, RoutedPager } from '../crud'

const DriverListProps = listProps(Driver)

const driverLinks = links('drivers')

export const DriverList = component(DriverListProps, ({ data: driverList }) => (
  <Section>
    <HeadTitle>Drivers</HeadTitle>

    <CreateLink to={driverLinks.create}>Add Driver</CreateLink>

    <CrudTable
      data={driverList}
      headers={['name', 'lastActive', 'shift', 'status']}
      editLink={v => driverLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))
