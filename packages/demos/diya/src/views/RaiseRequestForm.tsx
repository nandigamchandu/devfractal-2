import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { EVS } from '../common'
import { HeadTitle } from '../components'

export const RaiseRequestForm = formComponent(EVS, ({ initial, onSubmit }) => (
  <>
    <HeadTitle>Raise Request</HeadTitle>

    <Section>
      <Simple.Form initialValues={initial} onSubmit={onSubmit}>
        <Columns>
          <Column>
            <Simple.Select
              name="additionalEvRequired"
              label="Additional Ev required"
              fullWidth
            >
              <option>select</option>
            </Simple.Select>

            <Simple.Select name="frequency" fullWidth>
              <option value="once">Once</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">yearly</option>
            </Simple.Select>
          </Column>
          <Column>
            <Simple.Date name="startDate" fullWidth />
            <Simple.Date name="endDate" fullWidth />
          </Column>
        </Columns>
        <Simple.FormButtons alignment="centered" />
      </Simple.Form>
    </Section>
  </>
))
