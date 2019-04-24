import { Field, FieldConfig, FieldProps } from 'formik'
import React from 'react'
import { CleaveInput, CleaveInputProps } from '../../lib'
import { OmitForm } from './types'

type CleaveInputInnerProps<V> = FieldProps<V> & OmitForm<CleaveInputProps>

function CleaveInputInner<V>({
  form,
  field,
  ...props
}: CleaveInputInnerProps<V>): JSX.Element {
  return <CleaveInput {...props} {...field} />
}

export type CleaveInputFieldProps = CleaveInputProps & FieldConfig

export const CleaveInputField: React.FC<CleaveInputFieldProps> = props => (
  <Field {...props} component={CleaveInputInner} />
)
