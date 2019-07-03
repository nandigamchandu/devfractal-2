import express from 'express'
import { UNAUTHORIZED } from 'http-status-codes'
import { AuthSession, Request } from './types'

export const auth = async (
  req: Request<unknown, unknown, AuthSession>,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (req.session && req.session.loggedIn) {
    next()
  } else {
    res
      .status(UNAUTHORIZED)
      .send({ errors: 'Not authorized to access this resource' })
  }
}
