import { Int, keyof, number, string, TypeOf } from 'io-ts'
import { ISODate, props, req } from 'technoidentity-utils'

const Shift = keyof({
  morning: true,
  evening: true,
})

const Status = keyof({
  active: true,
  inActive: true,
})

type Shift = TypeOf<typeof Shift>

type Status = TypeOf<typeof Status>

// @TODO: Remove re-enter account number

// @TODO: use props instead of opt

export const Driver = props(
  {
    lastActive: ISODate,
    id: string,
    status: Status,
  },
  {
    name: string,
    phone: string,
    driverLicence: string,
    shift: Shift,
    adharNumber: string,
    accountName: string,
    accountNumber: string,
    confirmAccountNumber: string,
    bankName: string,
    bankBranch: string,
    branchIFSCNumber: string,
  },
)

export type Driver = TypeOf<typeof Driver>

const Group = keyof({
  Retail: true,
  Cargo: true,
})

type Group = TypeOf<typeof Group>

export const Battery = props(
  {
    name: string,
    id: string,
    group: Group,
    remainingCycles: Int,
    status: Status,
  },
  {
    batteryMake: string,
    batteryModel: string,
    capacity: string,
    batteryCycles: Int,
    lastCharged: ISODate,
  },
)

export type Battery = TypeOf<typeof Battery>

export const Vehicle = props(
  {
    name: string,
    numberPlate: string,
    group: Group,
    nextService: ISODate,
    insuranceDue: ISODate,
    vehicleStatus: Status,
    id: string,
  },
  {
    makersClass: string,
    vehicleClass: string,
    yearOfManufacturing: Int,
    color: string,
    regnNumber: string,
    warranty: Int,
    lastServicedDate: ISODate,
    insuranceExpiryDate: ISODate,
  },
)

export type Vehicle = TypeOf<typeof Vehicle>

export const Params = req({ id: string })
