import { existingPathChecker } from '../utilities/existingPathChecker'
import { resizeImage } from '../utilities/resizeImage'
import { saveImage } from "../utilities/saveImage"
import pathP from 'path';

export const imageResizer = async function (filename: string, height: number, width: number) {

    try {

        const path = pathP.resolve(`images/thumb/${filename}_${height}_${width}.jpg`)

        if(!existingPathChecker(pathP.resolve('images/'+filename+'.jpg'))){
            throw new Error('Image does not exist')
        }
       
        if (!existingPathChecker(path)) {
            const buffer = await resizeImage(filename, height, width)
            if (!buffer) {
                throw new Error('Could not create image')
            } else {
                await saveImage(buffer, path)
            }
            console.log('Created resized image')
        } else {
            console.log('Resized image already exists')
        }
        return path
    } catch (err :any) {
        throw new Error('Error in resizing image: '+err.message)
    }
}