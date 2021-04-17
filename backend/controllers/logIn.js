const jwt = require('jsonwebtoken')

logInToken = (req, res) => {
  if(req.body.password === process.env.PASSWORD && req.body.username === process.env.USER) {
    jwt.sign(req.body.password, 'secret_code_to_hash_pass', (err, token) => {
      res.json({
        token: token,
        auth: true
      })
    })
  } else {
    res.json({auth: false})
  }
}

module.exports = logInToken