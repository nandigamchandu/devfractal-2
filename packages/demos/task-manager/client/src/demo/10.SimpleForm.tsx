import React from 'react'
import { max, min, required } from 'technoidentity-devfractal-forms'
import { Simple } from 'technoidentity-devfractal-simple'
import { Section } from 'technoidentity-devfractal-ui-core'
import { initialLoginValues } from './09.ModerateForm'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues}>
      <Simple.Text
        name="username"
        validations={[required(), max(20), min(10)]}
      />
      <Simple.Password name="password" validations={[required(), min(8)]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)