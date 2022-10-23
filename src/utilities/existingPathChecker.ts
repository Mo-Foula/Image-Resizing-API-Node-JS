import fs from 'fs'

export const existingPathChecker = function (path :string): Boolean {
    return fs.existsSync(path)
}