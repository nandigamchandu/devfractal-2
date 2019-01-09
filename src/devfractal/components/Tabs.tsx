import React from 'react'
import warning from 'tiny-warning'
import { Omit } from '../../types'
import { State } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface TabsChangeEvent {
  readonly name?: string
  readonly value?: string
}

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
  readonly _active?: boolean
  _setSelectedTab?(event: TabsChangeEvent): void
}

export const TabsItem: React.SFC<TabsItemProps> = args => {
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

interface TabsViewProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly name?: string
  readonly selectedTab?: string
  readonly defaultValue?: string
  readonly readOnly?: boolean
  onTabChange?(evt: TabsChangeEvent): void
}

export type TabsProps = TabsViewProps

const TabsView: React.SFC<Omit<TabsProps, 'defaultValue'>> = ({
  size,
  alignment,
  fullWidth,
  tabsStyle,
  name,
  selectedTab,
  onTabChange,
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
    selectedTab || ((children && children[0] && children[0].props.value) || '0')
  return (
    <Div {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any, i: number) => {
          const value: string = child.props.value || i.toString()
          return React.cloneElement(child, {
            _name: name,
            value,
            _active: selected === value,
            _setSelectedTab: ({ value }: TabsChangeEvent) =>
              onTabChange && onTabChange({ name, value }),
          })
        })}
      </ul>
    </Div>
  )
}

export const Tabs: React.SFC<TabsProps> = ({
  defaultValue,
  children,
  ...props
}) => {
  warning(
    !(props.selectedTab && !props.onTabChange && !props.readOnly),
    "'selectedTab' provided, but not 'onTabChange', make this component readOnly.",
  )

  return props.selectedTab !== undefined ? (
    <TabsView {...props}>{children}</TabsView>
  ) : (
    <State
      initial={props.selectedTab || defaultValue}
      render={({ value, set }) => (
        <TabsView
          {...props}
          selectedTab={value}
          onTabChange={({ value }) => set(value)}
        >
          {children}
        </TabsView>
      )}
    />
  )
}
