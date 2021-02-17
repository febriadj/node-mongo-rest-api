const router = require('express').Router()
const dbKaryawan = require('../models/karyawan')

router.get('/', (req, res, next) => {
  dbKaryawan.find().sort({ nik: - 1 })
    .then(result => res.json({ body: result }))
    .catch(err => console.log(err))
})

router.post('/', (req, res, next) => {
  const { nik, namaAwal, namaAkhir, umur, posisi } = req.body

  if ( !nik || !namaAwal || !namaAkhir || !umur || !posisi ) return console.log('Data ada yang belum ditambahkan')

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
    .then(result => res.json({ body: 'data berhasil ditambahkan' }))
    .catch(err => console.log(err))
})

router.put('/', (req, res, next) => {
  const query = req.query.nik
  const { nik, namaAwal, namaAkhir, umur, posisi } = req.body

  const karyawan = {
    nik: nik,
    nama: { 
      awal: namaAwal.toLowerCase(), 
      akhir: namaAkhir.toLowerCase() 
    },
    umur: umur,
    posisi: posisi.toLowerCase()
  }

  dbKaryawan.findOneAndUpdate({ nik: query }, karyawan )
    .then(result => {
      if ( result ) return res.json({ body: 'update data berhasil' })
      
      console.log('data tidak ditemukan - gagal update')
      res.sendStatus(403)
    })
    .catch(err => console.log(err))
})

router.delete('/', (req, res, next) => {
  const { nik } = req.body
  dbKaryawan.findOneAndDelete({ nik: nik })
    .then(result => {
      if ( result ) return res.json({ body: 'data berhasil dihapus' })
      
      console.log('data tidak ditemukan - gagal menghapus')
      res.sendStatus(403)
    })
    .catch(err => console.log(err))
})

module.exports = router