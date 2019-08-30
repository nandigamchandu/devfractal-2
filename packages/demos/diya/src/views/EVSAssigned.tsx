import { faBus, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  ButtonsGroup,
  CreateLink,
  Icon,
  listComponent,
  SimpleTable,
} from 'technoidentity-devfractal'
import { EVS } from '../common'
import { HeadTitle } from '../components'

const Actions = () => (
  <ButtonsGroup>
    <Link to={'/planRoute'} className="button is-small is-rounded">
      <Icon icon={faMapMarker} />
      <div>Plan Route</div>
    </Link>

    <Button rounded size="small">
      <Icon icon={faBus} />
      <div>Location</div>
    </Button>
  </ButtonsGroup>
)

// const evsLinks = links('evs')

export const EVSList = listComponent(EVS, ({ data: evsList }) => (
  <>
    <HeadTitle>EVs Assigned</HeadTitle>

    <CreateLink alignment="right" variant="primary" to={'/raiseRequest'}>
      {' '}
      Request New EV
    </CreateLink>

    <SimpleTable
      data={evsList}
      headers={['driverName', 'status', 'Actions']}
      headerLabels={['Driver', 'Status', 'Actions']}
      striped
    >
      {key =>
        // tslint:disable-next-line: no-null-keyword
        key === 'Actions' ? <Actions /> : null
      }
    </SimpleTable>
  </>
))
