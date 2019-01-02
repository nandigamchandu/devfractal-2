import React from 'react'
import { Boolean, Number } from 'tcomb'
import { camelCaseToPhrase } from '../../utils'
import { Box } from '../elements'
import { Label } from '../form'
import { Simple } from '../formik'
import { Section } from '../layout'

export interface SimpleEditorProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleEditor: React.SFC<SimpleEditorProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        <Simple.Form initialValues={object}>
          {Object.keys(object).map(key => (
            <React.Fragment key={key}>
              {Boolean.is(object[key]) ? (
                <>
                  <Label>{camelCaseToPhrase(key)}</Label>
                  <Simple.Checkbox name={key} checked={object[key]} readOnly />
                </>
              ) : Number.is(object[key]) ? (
                <Simple.Input
                  label={camelCaseToPhrase(key)}
                  type="number"
                  name={key}
                />
              ) : (
                <Simple.Input
                  label={camelCaseToPhrase(key)}
                  type="text"
                  name={key}
                />
              )}
            </React.Fragment>
          ))}
          <Simple.FormButtons />
        </Simple.Form>
      </Box>
    </Section>
  )
}
