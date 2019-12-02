import * as express from 'express'
import * as mongoose from 'mongoose'
import * as passport from 'passport'

const router = express.Router()
const ReturnEntry = mongoose.model('ReturnEntry')

router.get('/', async (req, res) => {
  const returnEntries = await ReturnEntry
    .find()
  // .limit(+req.query.limit || 10)
  // .skip(+req.query.offset || 0)
  res.json({
    data: returnEntries,
    totalCount: await ReturnEntry.countDocuments()
  })
})

/**
 * Route that commands to update product list.
 * ADMIN ONLY  => TODO
 */
router.post(
  '/',
  // passport.authenticate('jwt', {
  //   session: false
  // }),
  async (req, res) => {
    res.json({k: 'k'})
  }
)

module.exports = router