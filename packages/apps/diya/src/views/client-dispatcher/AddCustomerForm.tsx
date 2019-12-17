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
import { useAuth } from '../../auth/AuthContext'
import { PostCustomerData } from '../../common'

const schema = yup.object().shape({
  contactNumber: yup
    .string()
    .matches(/\d/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
})

export const CustomerForm = formComponent(
  PostCustomerData,
  ({ initial, onSubmit }) => {
    const { tripData } = useAuth()
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
              values: PostCustomerData,
              actions: FormikActions<PostCustomerData>,
            ) => {
              const customer: PostCustomerData = {
                ...values,
                longitude: 0,
                latitude: 0,
                vehicleId: tripData.vehicleId,
                tripId: tripData.id,
              }
              onSubmit(customer, actions)
            }}
          >
            <Columns>
              <Column>
                <Simple.Text
                  name="name"
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
                  <option value="COD">COD</option>
                  <option value="PrePaid">PrePaid</option>
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
                <Simple.Select name="deliveryStatus">
                  <option value="scheduled">scheduled</option>
                  <option value="pending">pending</option>
                  <option value="delivered">delivered</option>
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
