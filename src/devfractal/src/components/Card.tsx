import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const Card: React.FunctionComponent<CardProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {}

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header')
  return (
    <Div as="header" {...props} className={classes}>
      {children}
    </Div>
  )
}

type HeaderTitleAlignment = 'centered'
export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLHeadElement>,
    Helpers {
  readonly alignment?: HeaderTitleAlignment
}

export const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps> = ({
  alignment,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-title', {
    [`is-${alignment}`]: alignment,
  })
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardHeaderIconProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-header-icon')
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {}

export const CardContent: React.FunctionComponent<CardContentProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-content')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer')
  return (
    <Div as="footer" {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface CardFooterItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardFooterItem: React.FunctionComponent<CardFooterItemProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-footer-item')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface CardImageProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const CardImage: React.FunctionComponent<CardImageProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'card-image')
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
