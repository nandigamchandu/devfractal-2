import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Employee } from '../common'
import { CreateLink, HeadTitle } from '../components'
import { CrudTable, links, listProps, StatePager } from '../crud'

export const EmployeeListProps = listProps(Employee)

const employeeLinks = links('employees')

export const EmployeeList = component(
  EmployeeListProps,
  ({ data: employeeList }) => (
    <Section>
      <HeadTitle>Employee</HeadTitle>

      <CreateLink to={employeeLinks.create}> Add Employee</CreateLink>

      <CrudTable
        data={employeeList}
        headers={['name', 'role']}
        editLink={v => employeeLinks.edit(v.id)}
      />

      <StatePager />
    </Section>
  ),
)
