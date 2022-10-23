import { Request, Response } from "express"
import { BaseSchema } from "yup"

function _getTarget(req: any, target: string): Object {
    return req[target]
}

export const requestChecker = (schema: BaseSchema, target: string): Function =>
    async (req: Request, res: Response, next: Function): Promise<any> => {
        try {
            await schema.validate(_getTarget(req, target))
            next()
        }
        catch (err) {
            res.send('Error in '+target+' payload')
        }

    }
