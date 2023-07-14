const test = require('tape')
const supertest = require('supertest')
const app = require('./app')

test('teste  30', (t) => {
    supertest(app)
    .get('/aplicarValidacao/30')
    .expect('content-Type', /json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.valorValidado === 30, 'Desconto correto')
        t.end()
    })

})