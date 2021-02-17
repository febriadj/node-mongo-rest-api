const router = require('express').Router()
const dbKaryawan = require('../models/karyawan')

router.get('/', (req, res, next) => {
  dbKaryawan.find().sort({ nik: - 1 })
    .then(result => res.json({ body: result }))
    .catch(err => console.log(err))
})

router.post('/', (req, res, next) => {
  const { nik, namaAwal, namaAkhir, umur, posisi } = req.body

  if ( !nik || !namaAwal || !namaAkhir || !umur || !posisi ) return console.log('data ada yang belum ditambahkan')

  const karyawan = new dbKaryawan({
    nik: nik,
    nama: { 
      awal: namaAwal.toLowerCase(),
      akhir: namaAkhir.toLowerCase() 
    },
    umur: umur,
    posisi: posisi.toLowerCase()
  })
  
  karyawan.save()
    .then(result => res.json({ body: 'Data berhasil ditambahkan' }))
    .catch(err => { 
      console.log(err)
      res.status(401).json({ body: 'Gagal menambahkan data' })
    })
})

router.delete('/', (req, res, next) => {
  const { nik } = req.body
  dbKaryawan.findOneAndDelete({ nik: nik })
    .then(result => {
      if ( result ) return res.json({ body: 'Data berhasil dihapus' })
      console.log('Data tidak ditemukan')
      res.sendStatus(403)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(401)
    })
})

module.exports = router