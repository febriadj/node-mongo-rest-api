const mongoose = require('mongoose')
const Schema = mongoose.Schema

exports.dbKaryawan = mongoose.model('karyawan', new Schema({
  nik: { type: String, unique: true },
  nama: { first: String, last: String },
  umur: Number,
  posisi: String,
}))