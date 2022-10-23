import { imagesGetter } from '../../services/imagesGetter'
import JasmineExpect from "jasmine-expect";
import fs from 'fs';

describe('Images getter service', () => {

    it('Works normally', async () => {
        const expected = (await imagesGetter())

        const foundLi = expected.indexOf('<li>')

        expect(foundLi).toBeNumber;
    })

    it('With non existing path it will return no existing directory', async () => {
        let expected = 'No error thrown.'

        try{
            (await imagesGetter('falsy_path'))
        }catch (err :any) {
            expected = err.message
        }

        const foundLi = expected.indexOf('no such file or directory')


        expect(foundLi).toBeGreaterThan(-1);
    })

    it('With path that has no images it will return no images found', async () => {
        let expected = 'No error thrown.'

        const falsyPath = 'empty_folder_created_for_testing_images';

        fs.mkdirSync(falsyPath)

        try{
            expected = (await imagesGetter(falsyPath))
        }catch (err :any) {
            expected = err.message
        }

        fs.promises.rmdir(falsyPath)

        const foundLi = expected.indexOf('No images found')

        expect(foundLi).toBeGreaterThan(-1);
    })

})