import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

type DeleteSize = 'small' | 'medium' | 'large'

export interface DeleteProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly size?: DeleteSize
}

export const Delete: React.FunctionComponent<DeleteProps> = ({
  size,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'delete', {
    [`is-${size}`]: size,
  })
  return <Div as="a" {...props} className={classes} />
}
