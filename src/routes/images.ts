import { RequestHandler, Router as ExpressRouter } from 'express'

import { requestChecker } from '../middlewares/requestChecker'

import { ImageResizerYupSchema } from '../schemas/imageResizerSchema'
import {
  imagesResizerController,
  imagesGetterController,
} from '../controllers/images'

const imageRouter = ExpressRouter()

imageRouter.get(
  '/',
  [requestChecker(ImageResizerYupSchema, 'query') as RequestHandler],
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  imagesResizerController
)

// eslint-disable-next-line @typescript-eslint/no-misused-promises
imageRouter.get('/getAll', imagesGetterController)

export { imageRouter as imageProcessorRouter }
