import { GoogleMapProps } from '@react-google-maps/api'

export const defaultMapSettings: GoogleMapProps = {
  id: 'example-map',
  mapContainerStyle: {
    height: '400px',
    width: '100%',
  },
  zoom: 12,
  center: {
    lat: 17.385044,
    lng: 78.486671,
  },
}
