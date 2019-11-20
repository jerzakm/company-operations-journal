import * as express from 'express'
import * as mongoose from 'mongoose'

const router = express.Router()
const User = mongoose.model('User')

router.post('/register', async (req, res, next) => {
  try {
    const user = await (new User({
      username: req.body.username,
      password: req.body.password,
      name: 'test',
      group: 'test'
    }).save())
    res.json({
      _id: user._id,
      username: user.username,
      token: user.getToken()
    })
  } catch (err) {
    if (err.code === 11000) {
      next({
        status: 409,
        message: 'This username already exists!'
      })
    }
    next()
  }
})

module.exports = router