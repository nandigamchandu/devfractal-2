import * as React from 'react'
import { Helpers, removeHelpers } from '../modifiers'
import { removeControlHelpers, ControlHelpers } from './ControlHelpers'
import { removeIconHelpers, IconHelpers } from './iconHelpers'

export interface AllControlHelpers
  extends Helpers,
    ControlHelpers,
    IconHelpers {}

type ControlType =
  | 'button'
  | 'input'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'file'
interface ControlDivProps
  extends React.AllHTMLAttributes<HTMLElement>,
    AllControlHelpers {
  readonly as?: ControlType
}

export const ControlDiv: React.SFC<ControlDivProps> = ({
  as = 'input',
  className,
  children,
  ...props
}) =>
  React.createElement(
    as,
    {
      ...removeIconHelpers(removeControlHelpers(removeHelpers(props))),
      className,
    },
    children,
  )
