import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormikActions } from 'formik'
import React from 'react'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
  Title,
} from 'technoidentity-devfractal'
import { ClientData } from '../common'
import { googleMapApiKey } from '../config'
import { defaultMapSettings, MapSearch } from '../maps'

export const ClientForm = formComponent(
  ClientData,
  ({ initial, edit, onSubmit }) => {
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
          <Title size="4" textColor="info">
            {edit ? 'Update' : 'Add'} Client
          </Title>
        </Section>
        <Section>
          <Simple.Form
            initialValues={initial}
            onSubmit={(
              values: ClientData,
              actions: FormikActions<ClientData>,
            ) => {
              const client = {
                ...values,
                latitude: location['lat'],
                longitude: location['lng'],
                address,
                id: values.id !== '' ? values.id : undefined,
                remarks: undefined,
              }
              // tslint:disable-next-line: no-floating-promises
              onSubmit(client, actions)
            }}
          >
            <Columns>
              <Column>
                <Simple.Text name="name" label="Client Name" />

                <Simple.Select name="billingType" fullWidth>
                  <option value="contract_per_month">Contract Per Month</option>
                  <option value="pay_per_delivery">Pay Per Delivery</option>
                  <option value="pay_per_kms_and_time">
                    Pay Per Kms and Time
                  </option>
                  <option value="pay_per_use">Pay Per Use</option>
                  <option value="remarks">Remarks</option>
                </Simple.Select>
                <Simple.Number name="numberOfEvsOrDrivers" label="No. of EVS" />
              </Column>

              <Column>
                <Simple.Text name="contactName" />
                <Simple.Telephone name="contactNumber" />
                <Simple.Email name="email" label="Email Address" />
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
                      console.log(places && places)
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

            <Simple.FormButtons />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
