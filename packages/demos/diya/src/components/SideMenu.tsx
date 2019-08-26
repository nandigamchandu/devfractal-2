import {
  faBell,
  faBus,
  faCarBattery,
  faMapMarked,
  faPaperPlane,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {
  Column,
  Icon,
  Image,
  Menu,
  MenuItem,
  MenuList,
  Section,
} from 'technoidentity-devfractal'
import { menuBurger } from '../common/menuBurger'
import diyaLogo from '../images/diyaWhiteLogo.png'

export const SideMenu = () => (
  <Column
    narrow
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Section className="has-background-link">
      <a
        role="button"
        className="navbar-burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
        onClick={menuBurger}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
      <Image src={diyaLogo} alt="diyaImage" size="96x96" />
    </Section>

    <Section paddingLess>
      <Menu>
        <MenuList
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MenuItem href="/drivers">
            <Icon icon={faUsers} />{' '}
            <span className="menu-list-label">Drivers</span>
          </MenuItem>
          <MenuItem href="/vehicles">
            <Icon icon={faBus} />{' '}
            <span className="menu-list-label">Vehicles</span>
          </MenuItem>
          <MenuItem href="/batteries">
            <Icon icon={faCarBattery} />{' '}
            <span className="menu-list-label">Battery</span>
          </MenuItem>
          <MenuItem href="/clients">
            <Icon icon={faUserFriends} />{' '}
            <span className="menu-list-label">Clients</span>
          </MenuItem>
          <MenuItem href="/geo_fences">
            <Icon icon={faMapMarked} />{' '}
            <span className="menu-list-label">GeoFences</span>
          </MenuItem>
          <MenuItem href="/users">
            <Icon icon={faUsers} />{' '}
            <span className="menu-list-label">Users</span>
          </MenuItem>
          <MenuItem href="#!">
            <Icon icon={faBell} />{' '}
            <span className="menu-list-label">Alerts</span>
          </MenuItem>
          <MenuItem href="#!">
            <Icon icon={faPaperPlane} />{' '}
            <span className="menu-list-label">Reports</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </Section>
  </Column>
)
