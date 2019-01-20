import React, { useContext, useState } from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface NavbarContext {
  readonly visible?: boolean
  setVisible?(visible: boolean): void
}

const NavbarContext: React.Context<NavbarContext> = React.createContext({})

type NavbarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'warning'
  | 'danger'
  | 'success'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'

type NavbarModifier = 'transparent' | 'fixed-top' | 'fixed-bottom'

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly variant?: NavbarVariant
  readonly modifier?: NavbarModifier
}

export const Navbar: React.SFC<NavbarProps> = ({
  variant,
  modifier,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false)
  const classes: string = classNamesHelper(props, 'navbar', {
    [`is-${variant}`]: variant,
    [`is-${modifier}`]: modifier,
  })
  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      <Div {...props} className={classes}>
        {children}
      </Div>
    </NavbarContext.Provider>
  )
}

export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarBrand: React.SFC<NavbarBrandProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-brand')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarBurger: React.SFC<NavbarBurgerProps> = ({
  active,
  children,
  ...props
}) => {
  const { visible, setVisible } = useContext(NavbarContext)
  const classes: string = classNamesHelper(
    props,
    { 'is-active': active || visible },
    'navbar-burger',
    'burger',
  )
  return (
    <Div
      as="a"
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </Div>
  )
}

type NavbarItemModifier = 'expanded' | 'tab' | 'hoverable'

type NavbarItemTag = 'div' | 'a'
export interface NavbarItemsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly dropdown?: boolean
  readonly as?: NavbarItemTag
  readonly active?: boolean
  readonly dropUp?: boolean
  readonly href?: string
  readonly modifier?: NavbarItemModifier
}

export const NavbarItem: React.SFC<NavbarItemsProps> = ({
  href,
  active,
  as,
  dropdown,
  dropUp,
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-item', {
    href: { href },
    'is-active': active,
    'has-dropdown-up': dropUp,
    'has-dropdown': dropdown,
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div
      as={as}
      {...props}
      className={classes}
      role="navigation"
      aria-label="main navigation"
    >
      {children}
    </Div>
  )
}

export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
}

export const NavbarMenu: React.SFC<NavbarMenuProps> = ({
  active,
  children,
  ...props
}) => {
  const { visible, setVisible } = useContext(NavbarContext)
  const classes: string = classNamesHelper(props, 'navbar-menu', {
    'is-active': active || visible,
  })
  return (
    <Div
      {...props}
      className={classes}
      onClick={() => setVisible && setVisible(!visible)}
    >
      {children}
    </Div>
  )
}

type NavbarDropdownModifier = 'boxed'
export interface NavbarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly modifier?: NavbarDropdownModifier
}

export const NavbarDropdown: React.SFC<NavbarDropdownProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-dropdown', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

type NavbarLinkModifier = 'arrowless'
export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly modifier?: NavbarLinkModifier
}

export const NavbarLink: React.SFC<NavbarLinkProps> = ({
  modifier,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-link', {
    [`is-${modifier}`]: modifier,
  })
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarStart: React.SFC<NavbarStartProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-start')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const NavbarEnd: React.SFC<NavbarEndProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-end')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const NavbarDivider: React.SFC<NavbarDividerProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'navbar-divider')
  return (
    <Div as="hr" {...props} className={classes}>
      {children}
    </Div>
  )
}
