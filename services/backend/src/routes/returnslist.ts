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

router.get('/:returnId', async (req, res) => {
  const returnEntry = await ReturnEntry.findOne({
    _id: req.params.returnId
  })
  res.json(returnEntry)
})

router.post(
  '/',
  // passport.authenticate('jwt', {
  //   session: false
  // }),
  async (req, res) => {
    const returnEntry = await (new ReturnEntry({
      id: req.body.id,
      timestamp: req.body.timestamp,
      address: req.body.address,
      saleSource: req.body.saleSource,
      attachedDocuments: req.body.attachedDocuments,
      returnReason: req.body.returnReason,
      productEntryList: req.body.productEntryList,
      movedTo: req.body.movedTo,
      resolved: req.body.resolved,
    }).save())
    res.json(returnEntry)
  }
)

router.put(
  '/:returnId',
  passport.authenticate('jwt', {
    session: false
  }),
  async (req, res) => {
    let returnEntry = await ReturnEntry.findOne({
      _id: req.params.returnId
    })
    returnEntry = req.body
    returnEntry = await returnEntry.save()
    res.json(returnEntry)
  }
)

module.exports = router