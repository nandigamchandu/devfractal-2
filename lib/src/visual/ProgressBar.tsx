import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type ProgressBarVariant =
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'black'
  | 'dark'
  | 'light'

type ProgressBarSize = 'small' | 'medium' | 'large'

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLProgressElement>,
    Helpers {
  /**
   * Resize the ProgressBar
   */
  readonly size?: ProgressBarSize
  /**
   * To style the progressBar element by appending color(variant)
   */
  readonly variant?: ProgressBarVariant
  /**
   * It's used to show that some progress is going on,the actual duration is determined
   */
  readonly value?: string

  readonly max: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
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

// tslint:disable-next-line: no-default-export
export default ProgressBar