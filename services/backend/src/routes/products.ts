import * as express from 'express'
import * as passport from 'passport'
import * as mongoose from 'mongoose'
const fs = require('fs')
import { subiektConnection, sendQuery } from "../handlers/subiekt"

require('../models/Product.ts')
const Product = mongoose.model('Product')

const router = express.Router()

let productCache


router.get('/', async (req, res) => {

  if(!productCache) {
    productCache = await Product.find({})
  }

  res.json({
    data: productCache
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
    const pool = await subiektConnection()
    const groupData = await sendQuery(pool, productQueryString())
    const productList: any[] = []

    for(const entry of groupData.recordset){
      const product = {
          id: entry.tw_Id,
          group: entry.grt_Nazwa,
          symbol: entry.tw_Symbol,
          name: entry.tw_Nazwa,
          volume: entry.tw_Objetosc,
          weight: entry.tw_Masa
      }
      const filter = { id: product.id };
      const update = product;
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };
      console.log(`upsert: ${product.symbol}`)
      let doc = await Product.findOneAndUpdate(filter, update, options);
    }
    res.json({status: 'updating products'})
  }
)


const productQueryString = () => {
  return `
  SELECT tw_Id, tw_Symbol, tw_Nazwa, tw_Rodzaj, tw_Masa, tw_Objetosc, grt_Nazwa
FROM STEMPLARIUSZ_SGT.dbo.tw__Towar,
   STEMPLARIUSZ_SGT.dbo.sl_GrupaTw
  WHERE
STEMPLARIUSZ_SGT.dbo.tw__Towar.tw_IdGrupa = STEMPLARIUSZ_SGT.dbo.sl_GrupaTw.grt_Id
  `
}

interface ISubiektProduct {
  id: number
  group: string
  symbol: string
  name: string
  volume: number
  weight: number
}

module.exports = router