import { maxLength, minLength, required } from '@stp/forms'
import { Simple } from '@stp/simple'
import { Section } from '@stp/ui-core'
import React from 'react'
import { initialLoginValues } from './common'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues}>
      <Simple.Text
        label="Username:"
        name="username"
        validations={[required(), maxLength(20), minLength(10)]}
      />
      <Simple.Password
        label="Password:"
        name="password"
        validations={[required(), minLength(8)]}
      />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
