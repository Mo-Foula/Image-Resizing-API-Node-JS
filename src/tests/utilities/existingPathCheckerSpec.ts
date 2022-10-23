import { existingPathChecker } from '../../utilities/existingPathChecker'
import fs from 'fs';

describe('existing path checker utility', () => {

    it('Check if directory exist (returns true)', async () => {
        const falsyPath = 'empty_folder_created_for_testing_images';

        fs.mkdirSync(falsyPath)

        const expected = (existingPathChecker(falsyPath))

        fs.promises.rmdir(falsyPath)

        expect(expected).toBeTrue();
    })

    it('Check if directory exist (returns false)', async () => {
        const falsyPath = 'empty_folder_created_for_testing_images';

        const expected = (existingPathChecker(falsyPath))

        expect(expected).toBeFalse();
    })

})