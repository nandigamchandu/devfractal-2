import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type ProgressBarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

type ProgressBarSize = 'small' | 'medium' | 'large'

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLProgressElement>,
    Helpers {
  readonly size?: ProgressBarSize
  readonly variant?: ProgressBarVariant
  readonly value?: string
  readonly max: string
}

export const ProgressBar: React.SFC<ProgressBarProps> = ({
  size,
  variant,
  children,
  max,
  value,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'progress', {
    [`is-${size}`]: size,
    [`is-${variant}`]: variant,
  })

  return (
    <Div as="progress" {...props} className={classes} value={value} max={max}>
      {children}
    </Div>
  )
}
