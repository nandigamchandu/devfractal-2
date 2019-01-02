import { Form, Formik, FormikActions, FormikConsumer } from 'formik'
import { Persist } from 'formik-persist'
import React from 'react'
import { ObjectSchema } from 'yup'
import { camelCaseToPhrase } from '../../utils'
import { Button, Field, FieldProps, Label } from '../form'
import { Container } from '../layout'
import {
  CheckboxField,
  CheckboxFieldProps,
  DebugField,
  ErrorField,
  InputField,
  InputFieldProps,
  RadioFieldProps,
  RadioGroupField,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from './Fields'
import { consoleSubmit } from './submitHandlers'

export interface SimpleInputProps extends InputFieldProps {
  readonly label?: string
  readonly name: string
}

type GenericInputProps = FieldProps & Exclude<SimpleInputProps, 'type'>
// & ValidationProps

const SimpleInput: React.SFC<GenericInputProps> = ({
  // validations,
  label,
  ...props
}) => (
  <Field>
    <Label>{label || camelCaseToPhrase(props.name)}</Label>
    <InputField {...props} />
    <ErrorField name={props.name} />
  </Field>
)

const SimpleText: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="text" />
)
const SimplePassword: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="password" />
)
const SimpleEmail: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="email" />
)
const SimpleTelephone: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="tel" />
)
const SimpleUrl: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="url" />
)

export interface SimpleCheckboxProps extends CheckboxFieldProps {
  readonly name: string
}

const SimpleCheckbox: React.SFC<SimpleCheckboxProps> = ({
  children,
  ...props
}) => (
  <Field>
    <CheckboxField {...props}>{children}</CheckboxField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleRadioGroupProps extends RadioFieldProps {
  readonly name: string
}

const SimpleRadioGroup: React.SFC<SimpleRadioGroupProps> = ({
  children,
  ...props
}) => (
  <Field>
    <RadioGroupField {...props}>{children}</RadioGroupField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleSelectProps extends SelectFieldProps {
  readonly name: string
}

const SimpleSelect: React.SFC<SimpleSelectProps> = ({ children, ...props }) => (
  <Field>
    <SelectField {...props}>{children}</SelectField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleTextAreaProps extends TextAreaFieldProps {
  readonly name: string
  readonly label: string
}

const SimpleTextArea: React.SFC<SimpleTextAreaProps> = ({
  label,
  ...props
}) => (
  <Field>
    <Label>{label}</Label>
    <TextAreaField {...props} />
    <ErrorField name={props.name} />
  </Field>
)

//  const SimpleColor: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="color" />
// )
//  const SimpleDate: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="date" />
// )
//  const SimpleDateTimeLocal: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="datetime-local" />
// )
//  const SimpleMonth: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="month" />
// )
//  const SimpleNumber: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="number" />
// )
//  const SimpleRange: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="range" />
// )
//  const SimpleSearch: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="search" />
// )
//  const SimpleTime: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="time" />
// )

//  const SimpleWeek: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="week" />
// )
export interface SimpleFormButtonsProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

const SimpleFormButtons: React.SFC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
}) => (
  <FormikConsumer>
    {({ dirty, isSubmitting, handleReset }) => (
      <Field groupModifier="grouped-centered">
        {submit !== false && (
          <Button type="submit" variant="info" disabled={isSubmitting}>
            {submit}
          </Button>
        )}
        {reset !== false && (
          <Button
            disabled={!dirty || isSubmitting}
            variant="danger"
            type="reset"
            onClick={handleReset}
          >
            {reset}
          </Button>
        )}
      </Field>
    )}
  </FormikConsumer>
)

export interface SimpleFormProps<Values> {
  readonly initialValues: Values
  readonly validationSchema?: ObjectSchema<Partial<Values>>
  readonly persist?: string
  onSubmit?(values: Values, actions: FormikActions<Values>): void
}

const SimpleForm: <Values>(
  props: SimpleFormProps<Values> & { readonly children: React.ReactNode },
) => JSX.Element = ({
  initialValues,
  validationSchema,
  onSubmit = consoleSubmit(0),
  persist,
  children,
}) => {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          <Form>
            {children}
            {persist && <Persist name={persist} />}
          </Form>
        }
      </Formik>
    </Container>
  )
}

// tslint:disable-next-line:typedef
export const Simple = {
  Form: SimpleForm,
  FormButtons: SimpleFormButtons,
  Input: SimpleInput,
  Text: SimpleText,
  Password: SimplePassword,
  Email: SimpleEmail,
  Telephone: SimpleTelephone,
  Checkbox: SimpleCheckbox,
  Select: SimpleSelect,
  TextArea: SimpleTextArea,
  RadioGroup: SimpleRadioGroup,
  Url: SimpleUrl,
  Debug: DebugField,
}
