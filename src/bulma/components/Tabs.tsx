import * as React from 'react'
import classNames from 'classnames'

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

interface TabsProps {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly toggle?: boolean
  readonly boxed?: boolean
}

interface TabsItemProps {
  readonly active?: boolean
}

export const TabsItem: React.SFC<TabsItemProps> = ({ active, children }) => {
  const classes: string = classNames({
    'is-active': active,
  })
  return (
    <li className={classes}>
      <a>{children}</a>
    </li>
  )
}

export const Tabs: React.SFC<TabsProps> = ({
  size,
  alignment,
  fullWidth,
  toggle,
  boxed,
  children,
}) => {
  const classes: string = classNames('tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    'is-boxed': boxed,
    'is-toggle': toggle,
    'is-fullwidth': fullWidth,
  })
  return (
    <div className={classes}>
      <ul>{children}</ul>
    </div>
  )
}
