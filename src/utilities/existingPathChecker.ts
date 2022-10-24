import fs from 'fs'

export const existingPathChecker = function (path: string): boolean {
  return fs.existsSync(path)
}
