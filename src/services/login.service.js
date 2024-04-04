const { UsertModel } = require('../models/UsersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = async (email, password) => {
  const users = await UsertModel.find().exec()
  try {
    if (!(email && password)) {
      return 'All input is required'
    }
    // eslint-disable-next-line eqeqeq
    const user = users.find(x => x.password == password)
    // eslint-disable-next-line eqeqeq
    if (user && (users.find(x => x.email == user.email))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h'
        }
      )
      user.token = token
      return 'token: ' + user.token
    } else { return 'Invalid Credentials' + users }
  } catch (err) {
    console.log(err)
  }
}

// eslint-disable-next-line camelcase
const signUp = async (First_name, Last_name, Email, Password) => {
  const users = await UsertModel.find().exec()
  try {
    // eslint-disable-next-line camelcase
    if (!(Email && Password && First_name && Last_name)) {
      // eslint-disable-next-line no-undef
      res.status(400).send('All input is required')
    }

    // eslint-disable-next-line eqeqeq
    const oldUser = users.find(x => x.password == Password && x.email == Email)

    if (oldUser) {
      return 'User Already Exist. Please Login'
    }
    // eslint-disable-next-line no-undef
    encryptedPassword = await bcrypt.hash(Password, 10)

    const user = ({
      // eslint-disable-next-line camelcase
      First_name,
      // eslint-disable-next-line camelcase
      Last_name,
      email: Email.toLowerCase(),
      // eslint-disable-next-line no-undef
      password: encryptedPassword
    })

    const token = jwt.sign(
      { user_id: user._id, Email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h'
      }
    )
    user.token = token
    try {
      // eslint-disable-next-line camelcase
      await UsertModel.insertMany({ first_name: First_name, last_name: Last_name, email: Email, password: Password, token })
    } catch (err) {
      console.error(err)
    }
    return user
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  login,
  signUp
}
