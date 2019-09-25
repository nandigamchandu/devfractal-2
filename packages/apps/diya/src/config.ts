export const hostname: string = process.env.HOST_NAME
  ? process.env.HOST_NAME
  : 'localhost'

export const fakeBaseURL: string = `http://${hostname}:9999`

export const baseURL: string = 'http://cargos-aws.devti.in/v1'
export const googleMapApi: string =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJu6P9EdyC5YfmwzLJzCuDL_26l5Syqx0&v=3.exp&libraries=geometry,drawing,places'
