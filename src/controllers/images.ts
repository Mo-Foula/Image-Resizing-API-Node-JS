import { Request, Response } from 'express'

import { imageResizer } from '../services/imageResizer'

import { imagesGetter } from '../services/imagesGetter'

export const imagesResizerController = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    const filename: string = req.query.filename as string
    const height = Number(req.query.height as string)
    const width = Number(req.query.width as string)

    res.sendFile(await imageResizer(filename, height, width))
  } catch (err: any) {
    res.status(400).send(err.message)
  }
}

export const imagesGetterController = async function (
  req: Request,
  res: Response
): Promise<void> {
  try {
    res.send(await imagesGetter())
  } catch (err) {
    res.status(404).send(err)
  }
}
