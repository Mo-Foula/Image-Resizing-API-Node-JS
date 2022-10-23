import {resizeImage} from '../../utilities/resizeImage'

describe('Resize image utility', () => {

    it('Check if image is resized', async () => {

        const expected = await (resizeImage('fjord',200,200))

        expect(expected).toBeTruthy();
    })

    it('Testing with non existing image', async () => {

        let expected = 'No error yet'

        try{
            await resizeImage('non_existent_image_name',200,200)
        } catch (err: any) {
            expected = err.message //Input file is missing: images/non_existent_image_name.jpg
        }

        expect(expected).toEqual('Input file is missing: images/non_existent_image_name.jpg');
        // expect(expected).not.toEqual('No error yet');
    })

})