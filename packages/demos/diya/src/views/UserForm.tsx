import React from 'react'
import { component, Section, Simple, v2 } from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { User } from '../common'
import { HeadTitle } from '../components'

export const UserFormProps = v2.formProps(User)

export const UserForm = component(UserFormProps, ({ initial, onSubmit }) => (
  <>
    <HeadTitle>{initial ? 'Edit' : 'Add'} User</HeadTitle>

    <Section>
      <Simple.Form initialValues={initial || empty(User)} onSubmit={onSubmit}>
        <Simple.Text name="userName" />

        <Simple.Select name="role">
          <option value="Admin">Admin</option>
          <option value="Reporter">Reporter</option>
          <option value="Dispatcher">Dispatcher</option>
        </Simple.Select>

        <Simple.FormButtons alignment="centered" size="medium" />
      </Simple.Form>
    </Section>
  </>
))