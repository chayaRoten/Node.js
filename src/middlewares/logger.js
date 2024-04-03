const myLogger = function (req, res, next) {
  console.log('LOGGED:' + 'time: ' + Date.now() + ' url: ' + req.url)
  next()
}

module.exports = myLogger
