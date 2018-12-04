import * as React from 'react'

import classNames from 'classnames'

type TileType = 'ancestor' | 'parent' | 'child'

type TileColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'

type TileSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly tileType?: TileType
  readonly size?: TileSize
  readonly vertical?: boolean
  readonly color?: TileColor
  readonly notification?: boolean
  readonly box?: boolean
}

export const Tile: React.SFC<TileProps> = ({
  tileType,
  children,
  size,
  vertical,
  color,
  notification,
  box,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'tile',
    {
      [`is-${tileType}`]: tileType,
      [`is-${size}`]: size,
      [`is-vertical`]: vertical,
      [`is-${color}`]: color,
      [`notification`]: notification,
      [`box`]: box,
    },
    className,
  )
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
