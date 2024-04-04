import express, {Express , Request , Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app: Express = express()
const port = process.env.PORT || 3000


import categoryRouter from './src/routes/category_routes';
import productRouter from './src/routes/product_routes';
import loginRouter from './src/routes/login_routes';
import verifyToken from './src/middleware/auth ';
import loggerMiddleware from './src/middleware/logger';
import checkMethodMiddleware from './src/middleware/checkMethod';
import errorRouter from './src/routes/error_routes';

import './src/services/db.service';


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(loggerMiddleware)
app.use(checkMethodMiddleware)
app.use(loginRouter)
app.use(verifyToken)
app.use(categoryRouter)
app.use(productRouter)
app.use(errorRouter)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})

function errorHandler (err : Error,req : Request, res : Response) {
  res.status(500)
  res.send('There is currently an error on the server, please try again later' + '  |  ' + err)
}
app.use(errorHandler)
