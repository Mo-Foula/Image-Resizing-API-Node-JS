import fs from 'fs'
import { existingPathChecker } from './existingPathChecker'

export const saveImage = async (buffer: Buffer, path: string): Promise<any> => {
  if (!existingPathChecker('images/thumb')) {
    fs.mkdirSync('images/thumb')
  }
  return await fs.promises.writeFile(path, buffer)
}
