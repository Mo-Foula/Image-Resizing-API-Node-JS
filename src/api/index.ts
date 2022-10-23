const app = (require('express'))()
const port = 3000

import {imageProcessorRouter} from '../routes/images'

app.use('/api/images',imageProcessorRouter)




app.listen(port, () => {
    console.log('started listening on port ' + port)
})