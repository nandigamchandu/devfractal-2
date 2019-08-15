import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { User, userAPI } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const UserListViewProps = req({ userList: readonlyArray(User) })

type UserListViewProps = TypeOf<typeof UserListViewProps>

export const UserListView = component(UserListViewProps, ({ userList }) => (
  <Section>
    <HeadTitle>Users</HeadTitle>
    <CreateLink to="/users/add">Add user</CreateLink>
    <CrudTable
      data={userList}
      headers={['userName', 'role']}
      editURL={value => `users/${value.id}/edit`}
    />
    <StaticPagination />
  </Section>
))

export const UserList: React.FC = () => (
  <Get asyncFn={() => userAPI.many()}>
    {data => <UserListView userList={data} />}
  </Get>
)
