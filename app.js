const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const categoty = require('./src/routes/category_routes')
const product = require('./src/routes/product_routes')
const login = require('./src/routes/login_routes')
const auth = require('./src/middleware/auth')
const logger = require('./src/middleware/logger')
const checkMethod = require('./src/middleware/checkMethod')
const error = require('./src/routes/error_routes')
require('./src/services/db.service')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(logger)
app.use(checkMethod)
app.use(login)
app.use(auth)
app.use(categoty)
app.use(product)
app.use(error)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})

function errorHandler (err, req, res, next) {
  res.status(500)
  res.send('There is currently an error on the server, please try again later' + '  |  ' + err)
}

app.use(errorHandler)
