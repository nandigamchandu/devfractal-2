import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { CrudTable, links, listComponent, StatePager } from '../crud'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => (
  <Section>
    <HeadTitle>Vehicles</HeadTitle>

    <CreateLink to={vehicleLinks.create}>Add Vehicle</CreateLink>

    <CrudTable
      data={vehicleList}
      headers={[
        'name',
        'numberPlate',
        'group',
        'nextService',
        'insuranceDue',
        'status',
      ]}
      editLink={v => vehicleLinks.edit(v.id)}
    />

    <StatePager />
  </Section>
))
