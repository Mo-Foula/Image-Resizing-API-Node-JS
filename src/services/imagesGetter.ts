import fs from 'fs'

import generatePathsView from '../views/generatePathsView'

export const imagesGetter = async function (
  path: string = 'images'
): Promise<string> {
  try {
    const images: string[] = []
    const files = await fs.promises.readdir(path)
    for (const file of files) {
      if (file === 'thumb') continue
      images.push(file.toString())
    }
    return generatePathsView(images)
  } catch (err: any) {
    throw new Error(`Error in retreiving existing images: ${err.message}`)
  }
}
