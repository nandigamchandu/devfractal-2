import { FormikActions } from 'formik'
import { TypeOf } from 'io-ts'
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
  Navbar,
  NavbarBrand,
  NavbarItem,
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

export const AddDriverForm: React.FC<
  TypeOf<typeof DriverFormProps>
> = component(DriverFormProps, ({ initial, onSubmit }) => (
  <>
    <Navbar textBackgroundColor="light">
      <NavbarBrand>
        <NavbarItem>
          <Title size="4" textColor="info">
            Create Driver
          </Title>
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
    <Section>
      <Simple.Form initialValues={initial || initialValues} onSubmit={onSubmit}>
        <Columns>
          <Column>
            <Title size="5" textColor="info">
              Personal Details
            </Title>
            <Simple.Text name="name" validations={[required()]} />
            <Simple.Text name="driverId" validations={[required()]} />
            <Simple.Telephone name="phone" validations={[required()]} />
            <Simple.Text name="driverLicence" validations={[required()]} />
            <Simple.Text name="adharNumber" validations={[required()]} />
            <Label>Shift</Label>
            <Simple.Select name="shift">
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
              name="reEnterAccountNumber"
              validations={[required()]}
            />
            <Simple.Text name="bankName" validations={[required()]} />
            <Simple.Text name="bankBranch" validations={[required()]} />
            <Simple.Text
              name="branchIfscNumber"
              label="Branch IFSC Number"
              validations={[required()]}
            />
          </Column>
          <Column narrow>
            <Title size="6">Profile Photo</Title>
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
        <Simple.FormButtons />
      </Simple.Form>
    </Section>
  </>
))
