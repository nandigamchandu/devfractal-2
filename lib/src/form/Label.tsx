import React from 'react'
import { classNamesHelper, Div, Helpers } from '../lib'

export type LabelSize = 'small' | 'medium' | 'large'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Helpers {
  /**
   * For resizing the Label
   */
  readonly size?: LabelSize
  readonly as?: 'label' | 'div' | 'span'
}

export const Label: React.FC<LabelProps> = args => {
  const { size, as = 'label', children, ...props } = args

  const classes: string = classNamesHelper(props, 'label', {
    [`is-${size}`]: size,
  })

  return (
    <Div as={as} {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default Label
