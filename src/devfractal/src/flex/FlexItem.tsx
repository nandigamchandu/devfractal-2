import React from 'react'

type alignSelf =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'

interface FlexItemProps {
  readonly order?: number
  readonly flexGrow?: number
  readonly flexShrink?: number
  readonly flexBasis?: number | string
  readonly alignSelf?: alignSelf
}

export const FlexItem: React.FunctionComponent<FlexItemProps> = ({
  order,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  children,
}) => {
  return (
    <div style={{ order, flexBasis, flexGrow, flexShrink, alignSelf }}>
      {children}
    </div>
  )
}
