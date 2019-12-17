import { FormikActions } from 'formik'
import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  matches,
  required,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import * as yup from 'yup'
import { CustomerData } from '../../common'

const schema = yup.object().shape({
  contactNumber: yup
    .string()
    .matches(/\d/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
})

export const CustomerForm = formComponent(
  CustomerData,
  ({ initial, onSubmit }) => {
    const [paymentType, setPaymentType] = React.useState<string>(
      initial.address,
    )
    return (
      <>
        <Section>
          <Simple.Form
            initialValues={{
              ...initial,
            }}
            validationSchema={schema}
            onSubmit={(
              values: CustomerData,
              actions: FormikActions<CustomerData>,
            ) => {
              const customer = {
                ...values,
              }
              onSubmit(customer, actions)
            }}
          >
            <Columns>
              <Column>
                <Simple.Text
                  name="customerName"
                  validations={[
                    matches(/^[a-zA-Z ]*$/, 'must take only alphabets'),
                    required(),
                  ]}
                />

                <Simple.Select
                  name="paymentType"
                  fullWidth
                  onClick={e => {
                    setPaymentType(e.currentTarget.value)
                  }}
                >
                  <option value="contract_per_month">Contract Per Month</option>
                  <option value="pay_per_delivery">Pay Per Delivery</option>
                  <option value="pay_per_kms_and_time">
                    Pay Per Kms and Time
                  </option>
                  <option value="pay_per_use">Pay Per Use</option>
                  <option value="remarks">Remarks</option>
                </Simple.Select>
                {paymentType === 'remarks' ? (
                  <Simple.Text name="remarks" label="Remarks" />
                ) : // tslint:disable-next-line:no-null-keyword
                null}
                <Simple.Text
                  name="address"
                  validations={[required()]}
                  noControl
                />
                <Simple.Telephone
                  name="contactNumber"
                  validations={[required()]}
                />
                <Simple.Select name="status">
                  <option value="inactive">inactive</option>
                  <option value="active">active</option>
                </Simple.Select>
                <Simple.FormButtons submit={'Save'} />
              </Column>
            </Columns>
          </Simple.Form>
        </Section>
      </>
    )
  },
)
