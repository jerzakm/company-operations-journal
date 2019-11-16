import * as express from 'express'
import * as mongoose from 'mongoose'

const User = mongoose.model('User')
const router = express.Router()

router.post('/login', async (req, res, next) => {
  const user: any = await User.findOne({ username: req.body.username }).select('+password')
  const isAuthenticated = await (user && user.verifyPassword(req.body.password))
  if (!isAuthenticated) {
    next({
      status: 401,
      message: 'The username or password is wrong!'
    })
    return
  }

  res.json({
    _id: user._id,
    username: user.username,
    token: user.getToken()
  })
})

module.exports = router
