const request = require('supertest')

const app = require('./app')

describe('GET /', () => {
  test('GET no params', () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body).toEqual({message: "Hello, Setup Talk"})
      })
  })

  test('GET with a param', () => {
    request(app)
      .get('/?me=PapaiSmurf')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body).toEqual({message: "Hello, PapaiSmurf"})
      })
  })
})

describe('Unhappy paths', () => {
  test('I am lost', done => {
    request(app)
      .get('/nowhere')
      .expect(404, done)
  })

  test('Thrown an error', done => {
    request(app)
      .get('/throw')
      .expect(500, done)
  })
})

