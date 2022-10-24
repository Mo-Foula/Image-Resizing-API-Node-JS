import { imageProcessorRouter } from '../routes/images'

import express from 'express'

const app = express()
const port = 3000

app.use('/api/images', imageProcessorRouter)

app.listen(port, () => {
  console.log(`started listening on port ${port}`)
})

export default app
