const router = require('express').Router()
const dbKaryawan = require('../models/karyawan')

router.use('/api', require('./controllers'))
router.use((req, res) => { res.status(404).json({ body: 'page not found' })})

module.exports = router