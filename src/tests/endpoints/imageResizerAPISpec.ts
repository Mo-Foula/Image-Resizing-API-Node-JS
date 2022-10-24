import supertest from 'supertest'
import app from '../../api/index'

const request = supertest(app)

describe('Test image resizeer endpoint', () => {
  it('Should resize image normally', async () => {
    const response = await supertest(app).get(
      '/api/images?width=3000&height=3000&filename=santamonica'
    )
    console.log('response', response.status)
    expect(response.status).toBe(200)
    console.log('response', response.status)
  })

  it('Should fail', async () => {
    const response = await request.get('/api/images?width=3000&height=3000')
    expect(response.status).toBe(400)
  })
})
