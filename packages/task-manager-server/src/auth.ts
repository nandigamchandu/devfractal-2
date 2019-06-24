import express from 'express'

export const auth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if ((req.session as any).loggedIn) {
    next()
  } else {
    res.status(401).send({ error: 'Not authorized to access this resource' })
  }
}
