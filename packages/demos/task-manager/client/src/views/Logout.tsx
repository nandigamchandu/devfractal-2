import { useRedirect } from 'devfractal-api'
import { Button, component } from 'devfractal-ui-core'
import { string } from 'io-ts'
import React from 'react'
import { req } from 'technoidentity-utils'
import { sessionAPI } from '../common'
import { useAuth } from '../utils'

const LogoutProps = req({ redirectTo: string })

export const Logout = component(LogoutProps, ({ redirectTo }) => {
  const { isLoggedIn, logout } = useAuth()
  const { onRedirect } = useRedirect()

  return (
    <>
      {isLoggedIn && (
        <Button
          variant="dark"
          onClick={async () => {
            await sessionAPI.del('')
            logout()
            onRedirect(redirectTo)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
})
