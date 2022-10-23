import { Request, Response } from "express"

import { imageResizer } from "../services/imageResizer"

import {imagesGetter} from "../services/imagesGetter"

export const imagesResizerController = async function (req: Request, res: Response) {

    try {
        const filename: string = req.query.filename as string
        const height: number = Number(req.query.height as string)
        const width: number = Number(req.query.width as string)

        return res.sendFile(await imageResizer(filename, height, width))
    } catch (err :any) {
        return res.send(err.message)
    }
}

export const imagesGetterController = async function (req: Request, res: Response) {

    try {

        return res.send(await imagesGetter())
    } catch (err) {
        return res.send(err)
    }
}