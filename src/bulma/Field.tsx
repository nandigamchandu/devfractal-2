import * as React from 'react'
import classNames from 'classnames'

export interface FieldProps {
  readonly grouped?: boolean
  readonly groupCentered?: boolean
  readonly groupedRight?: boolean
  readonly groupedMultiline?: boolean
  readonly addons?: boolean
  readonly addonsCentered?: boolean
  readonly addonsRight?: boolean
  readonly horizontal?: boolean
}

export const Field: React.SFC<FieldProps> = ({
  children,
  grouped,
  groupCentered,
  groupedRight,
  groupedMultiline,
  addons,
  addonsCentered,
  addonsRight,
  horizontal,
}) => {
  const classes: string = classNames('field', {
    'is-grouped': grouped,
    'is-grouped-centered': groupCentered,
    'has-addons': addons,
    'has-addons-centered': addonsCentered,
    'is-grouped-right': groupedRight,
    'has-addons-right': addonsRight,
    'is-grouped-multiline': groupedMultiline,
    'is-horizontal': horizontal,
  })
  return <div className={classes}>{children}</div>
}
