import * as React from 'react'

import { Field, FieldConfig } from 'formik'

import { InputProps } from '../form/Input'
import {
  FormikInput,
  FormikCheckbox,
  FormikSelect,
  FormikTextArea,
} from './controls'
import { CheckBoxProps } from '../form/CheckBox'
import { SelectProps } from '../form/Select'
import { TextAreaProps } from '../form/TextArea'

export type FormikFieldConfig = Pick<
  FieldConfig,
  Extract<FieldConfig, 'validate' | 'innerRef'>
>

export type InputFieldProps = InputProps & FormikFieldConfig

export const InputField: React.SFC<InputFieldProps> = props => (
  <Field name={props.name} type={props.type} component={FormikInput} />
)

export type CheckboxFieldProps = CheckBoxProps & FormikFieldConfig
export const CheckboxField: React.SFC<CheckboxFieldProps> = ({
  children,
  ...props
}) => (
  <Field name={props.name} component={FormikCheckbox}>
    {children}
  </Field>
)

export type SelectFieldProps = SelectProps & FormikFieldConfig

export const SelectField: React.SFC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <Field name={props.name} component={FormikSelect}>
    {children}
  </Field>
)

export type TextAreaFieldProps = TextAreaProps & FormikFieldConfig

export const TextAreaField: React.SFC<TextAreaFieldProps> = props => (
  <Field name={props.name} component={FormikTextArea} />
)
