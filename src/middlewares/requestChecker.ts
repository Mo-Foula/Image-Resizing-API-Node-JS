import { Request, Response } from 'express'
import { BaseSchema } from 'yup'

function _getTarget(req: any, target: string): any {
  return req[target]
}

export const requestChecker =
  (schema: BaseSchema, target: string): any =>
  async (req: Request, res: Response, next: any): Promise<any> => {
    try {
      await schema.validate(_getTarget(req, target))
      next()
    } catch (err: any) {
      res.status(400).send(`'Error in ${target} payload, ${err.message}`)
    }
  }
