import * as React from 'react'

import { CheckBox } from '../form/CheckBox'
import { logger } from './common'
// import { logger } from './common'

export const CheckBoxExample: React.SFC = () => (
  <div>
    <CheckBox readOnly checked>
      Remember me
    </CheckBox>
    <CheckBox onChange={() => logger('hello world')}>
      i agree <a href="#">terms and conditions</a>
    </CheckBox>
    <CheckBox disabled>Save my Changes</CheckBox>
  </div>
)
