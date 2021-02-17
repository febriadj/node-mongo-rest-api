const router = require('express').Router()
const dbKaryawan = require('../models/karyawan')

router.get('/', (req, res, next) => {
  res.json({ body: 'hello world' })
})

module.exports = router