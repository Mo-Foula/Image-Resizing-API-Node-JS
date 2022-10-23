import { imageResizer } from '../../services/imageResizer'
import path from 'path'

describe('Image resizer service', () => {

    it('Works normally', async () => {
        const filename = 'fjord'
        const height = 1400
        const width = 1000

        const expectedPath = (await imageResizer(filename, height, width))

        expect(expectedPath).toEqual(path.resolve(`images/thumb/${filename}_${height}_${width}.jpg`));
    })

    it('Will throw error for non existing images', async () => {
        const filename = 'nonexistingimage'
        const height = 1400
        const width = 200

        let errorMessage = 'No error thrown.'
        try {
            await imageResizer(filename, height, width)
        } catch (error :any) {
            errorMessage = error.message
        }

        expect(errorMessage).toBe('Error in resizing image: Image does not exist');
    })

})