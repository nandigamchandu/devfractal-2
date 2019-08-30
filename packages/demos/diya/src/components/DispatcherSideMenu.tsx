import { faBus, faCodeBranch, faMap } from '@fortawesome/free-solid-svg-icons'
import { Menu, MenuItem, MenuList } from 'devfractal-ui'
import { Column, Icon, Image, Section } from 'devfractal-ui-core'
import React from 'react'
import diyaLogo from '../images/diyaLogo.png'

export const DispatcherSideMenu = () => (
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
    <Section>
      <Menu>
        <MenuList
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MenuItem href="/planRoute">
            <Icon icon={faMap} /> plan Route
          </MenuItem>
          <MenuItem href="/viewTrips">
            <Icon icon={faCodeBranch} /> View Trips
          </MenuItem>
          <MenuItem href="/evsAssigned">
            <Icon icon={faBus} /> Evs Assigned
          </MenuItem>
        </MenuList>
      </Menu>
    </Section>
  </Column>
)
