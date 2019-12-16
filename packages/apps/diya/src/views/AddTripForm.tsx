import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers'
import { FormikActions } from 'formik'
import React from 'react'
import { useRouteMatch } from 'react-router'
import {
  Column,
  Columns,
  formComponent,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { useAuth } from '../auth/AuthContext'
import { EVsTripData } from '../common'
export const AddTripForm = formComponent(
  EVsTripData,
  ({ initial, edit, onSubmit }) => {
    const { setHeaderText } = useAuth()
    const [startTime, setStartTime] = React.useState<Date | null>(new Date())
    const { params }: any = useRouteMatch()
    if (edit) {
      setHeaderText('Update Trip')
    } else {
      setHeaderText('Add Trip')
    }

    const vehicleId: string = params.id

    return (
      <>
        <Section>
          <Simple.Form
            initialValues={{ ...initial, vehicleId, startTime }}
            onSubmit={(
              values: EVsTripData,
              actions: FormikActions<EVsTripData>,
            ) => {
              const hours =
                startTime &&
                startTime
                  .getHours()
                  .toString()
                  .padStart(2, '0')
              const minutes =
                startTime &&
                startTime
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')
              const textValue = `${hours}:${minutes}`

              const addTripData = {
                ...values,
                startTime: textValue,
              }
              // tslint:disable-next-line: no-floating-promises
              onSubmit(addTripData, actions)
            }}
          >
            <Columns>
              <Column>
                <Simple.Date name="startDate" dateFormat="dd/MM/yyyy" />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker value={startTime} onChange={setStartTime} />
                </MuiPickersUtilsProvider>
              </Column>
            </Columns>
            <Simple.FormButtons submit={'Continue'} />
          </Simple.Form>
        </Section>
      </>
    )
  },
)
