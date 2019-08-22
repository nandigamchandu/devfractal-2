import { FormikActions } from 'formik'
import React from 'react'
import {
  Box,
  Button,
  Column,
  Columns,
  component,
  Image,
  Label,
  Media,
  MediaContent,
  required,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, props } from 'technoidentity-utils'
import { Driver } from '../common'

// const validationSchema = yup.object().shape({
//   name: yup.string().required(),
//   driverId: yup.string().required(),
//   phone: yup.string().required(),
//   driverLicence: yup.string().required(),
//   adharNumber: yup.string().required(),
// })

const DriverFormProps = props(
  {
    initial: Driver,
  },
  {
    onSubmit: fn<
      (values: Driver, actions: FormikActions<Driver>) => Promise<void>
    >(),
  },
)

const initialValues = empty(Driver)

export const DriverForm = component(
  DriverFormProps,
  ({ initial, onSubmit }) => (
    <>
      <Title size="4" textColor="info">
        Create Driver
      </Title>

      <Section>
        <Simple.Form
          initialValues={initial || initialValues}
          onSubmit={onSubmit}
        >
          <Columns>
            <Column>
              <Title size="5" textColor="info">
                Personal Details
              </Title>
              <Simple.Text name="name" validations={[required()]} />
              {/* <Simple.Text
                name="driverID"
                label="Driver ID"
                validations={[required()]}
              /> */}
              <Simple.Telephone name="phone" validations={[required()]} />
              <Simple.Text name="driverLicence" validations={[required()]} />
              <Simple.Text name="adharNumber" validations={[required()]} />
              <Simple.Select name="shift">
                <option>Select</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </Simple.Select>
            </Column>
            <Column>
              <Title size="5" textColor="info">
                Bank Details
              </Title>
              <Simple.Text name="accountName" validations={[required()]} />
              <Simple.Text name="accountNumber" validations={[required()]} />

              <Simple.Text
                name="confirmAccountNumber"
                validations={[required()]}
              />
              <Simple.Text name="bankName" validations={[required()]} />
              <Simple.Text name="bankBranch" validations={[required()]} />
              <Simple.Text
                name="branchIFSCNumber"
                label="Branch IFSC Number"
                validations={[required()]}
              />
            </Column>
            <Column narrow>
              <Title size="6" textColor="info">
                Profile Photo
              </Title>
              <Box>
                <Media>
                  <MediaContent>
                    <Image
                      size="128x128"
                      src="https://bulma.io/images/placeholders/128x128.png"
                    />
                  </MediaContent>
                </Media>
              </Box>
              <Button variant="dark">Upload Photo</Button>
            </Column>
          </Columns>
          <Simple.FormButtons alignment="centered" size="medium" />
        </Simple.Form>
      </Section>
    </>
  ),
)
