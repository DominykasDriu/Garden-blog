const jwt = require('jsonwebtoken')

auth = (req, res, next) => {
  jwt.verify(req.header('auth-token'), 'secret_code_to_hash_pass', (err, data) => {
    if(data === process.env.PASSWORD) {
      next()
    } else {
      res.status(401).json('You are not loged in!')
    }
  })
}

module.exports = auth;