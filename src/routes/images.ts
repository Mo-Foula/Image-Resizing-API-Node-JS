import { RequestHandler } from 'express';

import { requestChecker } from '../middlewares/requestChecker'

import { ImageResizerYupSchema } from '../schemas/imageResizerSchema'
import { imagesResizerController, imagesGetterController } from '../controllers/images'


import { Router as ExpressRouter } from 'express'

const imageRouter = ExpressRouter()

imageRouter.get('/',
    [requestChecker(ImageResizerYupSchema, 'query') as RequestHandler]
    , imagesResizerController)

    imageRouter.get('/getAll'
    , imagesGetterController)


export { imageRouter as imageProcessorRouter }
