import {
  faBell,
  faBullhorn,
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
import diyaLogo from '../images/diyaLogo.png'

export const SideMenu = () => (
  <Column
    className="is-2-mobile"
    narrow
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Section>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="true"
        data-target="navbarBasicExample"
        onClick={menuBurger}
      >
        <span />
        <span />
        <span />
      </a>
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
          <MenuItem href="/drivers">
            <Icon icon={faUsers} />
            <span className="is-hidden-touch">Drivers</span>
          </MenuItem>
          <MenuItem href="/vehicles">
            <Icon icon={faBus} />
            <span className="is-hidden-touch">Vehicles</span>
          </MenuItem>
          <MenuItem href="/batteries">
            <Icon icon={faCarBattery} />
            <span className="is-hidden-touch">Battery</span>
          </MenuItem>
          <MenuItem href="/clients">
            <Icon icon={faUserFriends} />
            <span className="is-hidden-touch">Clients</span>
          </MenuItem>
          <MenuItem href="/geo_fences">
            <Icon icon={faMapMarked} />
            <span className="is-hidden-touch">GeoFences</span>
          </MenuItem>
          <MenuItem href="/users">
            <Icon icon={faUsers} />
            <span className="is-hidden-touch">Users</span>
          </MenuItem>
          <MenuItem href="#!">
            <Icon icon={faBell} />
            <span className="is-hidden-touch">Alerts</span>
          </MenuItem>
          <MenuItem href="#!">
            <Icon icon={faPaperPlane} />
            <span className="is-hidden-touch">Reports</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </Section>
  </Column>
)
