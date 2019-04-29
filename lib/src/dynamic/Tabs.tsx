import {
  classNamesHelper,
  ControlledProps,
  Div,
  Helpers,
  Uncontrolled,
  ValueChangeEvent,
} from 'base'
import React from 'react'
import { Omit, warning } from 'utils'

export interface TabsChangeEvent extends ValueChangeEvent<string> {}

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'

export interface TabsItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly value?: string
}

interface TabsItemInternalProps extends TabsItemProps {
  readonly _name?: string
  readonly value: string
  readonly _active?: boolean
  _setSelectedTab?(event: TabsChangeEvent): void
}

export const TabsItem: React.FC<TabsItemProps> = args => {
  const {
    value,
    _name,
    _active,
    _setSelectedTab,
    children,
    ...props
  } = args as TabsItemInternalProps

  return (
    <Div
      as="li"
      {...props}
      className={classNamesHelper(props, { 'is-active': _active })}
    >
      <a
        onClick={() => {
          if (_setSelectedTab) {
            _setSelectedTab({ name, value })
          }
        }}
      >
        {children}
      </a>
    </Div>
  )
}

interface TabsViewProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'name' | 'value'
    >,
    ControlledProps<string>,
    Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle

  onChange?(evt: TabsChangeEvent): void
}

const TabsView: React.FC<Omit<TabsViewProps, 'defaultValue'>> = ({
  size,
  alignment,
  fullWidth,
  tabsStyle,
  name,
  value,
  onChange,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    'is-toggle': tabsStyle === 'toggle' || tabsStyle === 'toggle-rounded',
    [`is-${tabsStyle}`]: tabsStyle,
    'is-fullwidth': fullWidth,
  })
  const selected: string =
    value || ((children && children[0] && children[0].props.value) || '0')
  return (
    <Div {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any, i: number) => {
          warning(
            child.type.displayName === 'TabsItem',
            "Every child to 'Tabs' must be 'TabsItem'",
          )

          const value: string = child.props.value || i.toString()
          return React.cloneElement(child, {
            _name: name,
            value,
            _active: selected === value,
            _setSelectedTab: ({ value }: TabsChangeEvent) =>
              onChange && onChange({ name, value }),
          })
        })}
      </ul>
    </Div>
  )
}

export interface TabsProps extends TabsViewProps {
  readonly defaultValue?: string
}

export const Tabs: React.FC<TabsProps> = props => (
  <Uncontrolled {...props} component={TabsView} />
)

// tslint:disable-next-line: no-default-export
export default TabsItem
