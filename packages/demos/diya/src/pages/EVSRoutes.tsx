import React from 'react'
import { All, Create, links, paths } from 'technoidentity-devfractal'
import { evAPI } from '../common'
import { EVSList, RaiseRequestForm } from '../views'

const ps = paths('evs')
const ls = links('evs')

const RaiseRequestRoute: React.FC = () => (
  <Create
    path={ps.create}
    api={evAPI}
    form={RaiseRequestForm}
    redirectTo={ls.list}
  />
)

const EVSAssignedRoute = () => <All path={ps.list} api={evAPI} list={EVSList} />

export const EVSRoutes = () => (
  <>
    <EVSAssignedRoute />
    <RaiseRequestRoute />
  </>
)
