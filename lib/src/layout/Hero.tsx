import { classNamesHelper, Div, Helpers } from 'base'
import React from 'react'

type HeroVariant =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'link'

type HeroSize =
  | 'medium'
  | 'large'
  | 'halfheight'
  | 'fullheight'
  | 'fullheight-with-navbar'

export interface HeroProps extends React.HTMLAttributes<HTMLElement>, Helpers {
  /**
   * To style the Hero Elements by colors
   */
  readonly variant?: HeroVariant
  /**
   * To generate a subtle gradient
   */
  readonly bold?: boolean
  /**
   * To resize the imposing banners
   */
  readonly size?: HeroSize
}

export const Hero: React.FC<HeroProps> = ({
  children,
  variant,
  bold,
  size,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'hero', {
    [`is-${variant}`]: variant,
    'is-bold': bold,
    [`is-${size}`]: size,
  })
  return (
    <Div as="section" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroHead: React.FC<HeroHeadProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'hero-head')}>
    {children}
  </Div>
)

export interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroBody: React.FC<HeroBodyProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'hero-body')}>
    {children}
  </Div>
)

export interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const HeroFoot: React.FC<HeroFootProps> = ({ children, ...props }) => (
  <Div {...props} className={classNamesHelper(props, 'hero-foot')}>
    {children}
  </Div>
)

// tslint:disable-next-line: no-default-export
export default HeroHead
