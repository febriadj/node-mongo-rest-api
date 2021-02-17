const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = dbKaryawan = mongoose.model('karyawan', new Schema({
  nik: { type: String, unique: true },
  nama: { awal: String, akhir: String },
  umur: Number,
  posisi: String,
}))