import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
import { googleMapApiKey } from '../../config'
import { defaultMapSettings, MapSearch } from '../../maps'

const schema = yup.object().shape({
  contactNumber: yup
    .string()
    .matches(/\d/, 'must be valid mobile number')
    .length(10, 'must be 10 digit mobile number')
    .required('this is a required field'),
})

export const CustomerForm = formComponent(
  PostCustomerData,
  ({ initial, edit, onSubmit }) => {
    const { tripData, setHeaderText } = useAuth()
    const [paymentType, setPaymentType] = React.useState<string>(
      initial.address,
    )
    if (edit) {
      setHeaderText('Update Customer')
    } else {
      setHeaderText('Create Customer')
    }
    const initLocation =
      initial.latitude && initial.longitude
        ? { lat: initial.latitude, lng: initial.longitude }
        : {
            lat: 17.385044,
            lng: 78.486671,
          }

    const [location, setLocation] = React.useState<google.maps.LatLngLiteral>(
      initLocation,
    )
    const [address, setAddress] = React.useState<string>(initial.address)
    const [places, setPlaces] = React.useState<
      google.maps.places.Autocomplete
    >()
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
                latitude: location.lat,
                longitude: location.lng,
                address,
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
                <Simple.Date name="estimatedDeliveryTime" />
              </Column>
              <Column>
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
              </Column>
              <Column>
                <MapSearch
                  mapOptions={{
                    ...defaultMapSettings,
                    mapContainerStyle: {
                      height: '235px',
                      width: '100%',
                    },
                  }}
                  googleMapApiKey={googleMapApiKey}
                  location={location}
                  onLoad={autocomplete => {
                    setPlaces(autocomplete)
                  }}
                  onPlaceChanged={() => {
                    const geometry =
                      places && places.getPlace() && places.getPlace().geometry
                    if (geometry) {
                      setLocation(geometry.location.toJSON())
                    }
                  }}
                  inputOptions={{
                    type: 'search',
                    ctrlSize: 'small',
                    rightIcon: faSearch,
                    onChange: e => setAddress(e.target.value),
                  }}
                  markerOptions={{
                    draggable: true,
                    onDragEnd: event => {
                      setLocation(event.latLng.toJSON())
                    },
                  }}
                />
              </Column>
            </Columns>
            <Simple.FormButtons submit={edit ? 'Update' : 'Save'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
