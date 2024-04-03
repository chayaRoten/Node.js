const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const categoty = require('./src/controllers/categoriesControllet')
const product = require('./src/controllers/productsController')
const login = require('./src/controllers/loginControllet')
const auth = require('./src/middlewares/auth')
const logger = require('./src/middlewares/logger')
const checkMethod = require('./src/middlewares/checkMethod')
const db = require('./src/services/db.service')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(logger)
app.use(checkMethod)
app.use(db)
app.use(login)
app.use(auth)
app.use(categoty)
app.use(product)

app.get('*', (req, res) => {
  return res.status(404).send('You have a mistake in the address')
})

app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})

function errorHandler (err, req, res, next) {
  res.status(500)
  res.send('There is currently an error on the server, please try again later' + '  |  ' + err)
}

app.use(errorHandler)
