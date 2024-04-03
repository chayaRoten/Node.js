const checkMethod = function (req, res, next) {
  console.log('LOGGED:' + ' type= ' + req.method)
  if (req.method === 'POST' && ((!req.body.id || !req.body.name) && (!req.body.email || !req.body.password))) {
    console.log('POST method not allowed.')
    return res.status(405).send('Method Not Allowed')
  } else {
    next()
  }
}

module.exports = checkMethod
