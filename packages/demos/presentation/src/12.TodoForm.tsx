import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
import React from 'react'
import { Simple } from 'technoidentity-devfractal-simple'
import { component, Section } from 'technoidentity-devfractal-ui-core'
import { fn, props } from 'technoidentity-utils'
import { Todo } from './11.todoAPI'

export const initialValues: Todo = {
  title: '',
  scheduled: new Date(),
  done: false,
}

export const TodoFormProps = props(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikActions<Todo>) => Promise<void>
    >(),
  },
)
type TodoFormProps = TypeOf<typeof TodoFormProps>

export const TodoForm: React.FC<TodoFormProps> = component(
  TodoFormProps,
  ({ onSubmit, initial }) => (
    <Section>
      <Simple.Form initialValues={initial || initialValues} onSubmit={onSubmit}>
        <Simple.Text name="title" />
        <Simple.Date name="scheduled" />
        <Simple.Checkbox name="done" />
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  ),
)
