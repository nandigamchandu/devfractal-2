import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Select } from '../bulma/form/Select'

storiesOf('Select', module)
  .add('with size', () => (
    <div>
      <Select selectSize="small" onChange={action('onChange')}>
        <option>small</option>
        <option>medium</option>
        <option>large</option>
      </Select>
      <Select selectSize="medium">
        <option>medium</option>
        <option>large</option>
        <option>small</option>
      </Select>
      <Select selectSize="large">
        <option>large</option>
        <option>medium</option>
        <option>small</option>
      </Select>
    </div>
  ))
  .add('with variant', () => (
    <div>
      <Select variant="primary">
        <option>primary</option>
      </Select>
      <Select variant="info">
        <option>info</option>
      </Select>
      <Select variant="success">
        <option>success</option>
      </Select>
      <Select variant="warning">
        <option>warning</option>
      </Select>
      <Select variant="danger">
        <option>danger</option>
      </Select>
    </div>
  ))
  .add('rounded ', () => (
    <Select rounded>
      <option>Rounded Dropdown</option>
    </Select>
  ))
  .add('with state', () => (
    <div>
      <Select state="hovered">
        <option>hovered</option>
        <option>focused</option>
        <option>loading</option>
      </Select>
      <Select state="focused" variant="primary">
        <option>focused</option>
        <option>hovered</option>
        <option>loading</option>
      </Select>
      <Select loading>
        <option>loading</option>
        <option>focused</option>
        <option>hovered</option>
      </Select>
    </div>
  ))
