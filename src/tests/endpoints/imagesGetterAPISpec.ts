import supertest from 'supertest'
import app from '../../api/index'

const request = supertest(app)

describe('Test get all images endpoint', () => {
  it('Should work normally', async () => {
    const response = await request.get('/api/images/getAll')
    expect(response.status).toBe(200)
  })
})
