import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  /**
   * To have rounded pagination items
   */
  readonly rounded?: boolean

  readonly size?: 'small' | 'medium' | 'large'
  readonly alignment?: 'centered' | 'right'
}

export const Pagination: React.FC<PaginationProps> = ({
  rounded,
  size,
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    'is-rounded': rounded,
  })
  return (
    <Div
      as="nav"
      {...props}
      className={classes}
      role="navigation"
      aria-label="pagination"
    >
      {children}
    </Div>
  )
}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly current?: boolean
  readonly disabled?: boolean
}

export const PaginationLink: React.FC<PaginationLinkProps> = ({
  current,
  disabled,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-link', {
    'is-current': current,
  })
  return (
    <li>
      <Div as="a" {...props} disabled={disabled} className={classes}>
        {children}
      </Div>
    </li>
  )
}

export interface PaginationListProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PaginationList: React.FC<PaginationListProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-list')
  return (
    <Div as="ul" {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    Helpers {}

export const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-ellipsis')
  return (
    <li>
      <span {...props} className={classes}>
        &hellip;
      </span>
    </li>
  )
}
export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly disabled?: boolean
}

export const PaginationPrevious: React.FC<PaginationPreviousProps> = ({
  disabled,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(
    props,

    'pagination-previous',
  )
  return (
    <Div as="a" {...props} disabled={disabled} className={classes}>
      {children}
    </Div>
  )
}

export interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly disabled?: boolean
}

export const PaginationNext: React.FC<PaginationNextProps> = ({
  children,
  disabled,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'pagination-next')
  return (
    <Div as="a" {...props} disabled={disabled} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default PaginationLink