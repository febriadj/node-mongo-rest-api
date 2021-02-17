# Node Mongo Rest API
Membuat rest api sederhana menggunakan nodejs dan database mongodb untuk memanage data-data karyawan

# Route
| Route        | HTTP   | Deskripsi                               |
| ------------ | ------ | --------------------------------------- |
| `/api`       | GET    | Menampilkan Seluruh Data Karyawan       |
| `/api`       | POST   | Menambahkan Data Karyawan               |
| `/api?nik=?` | PUT    | Update Data Karyawan Berdasarkan NIK    |
| `/api`       | DELETE | Menghapus Data Karyawan Berdasarkan NIK |

# Jalankan Program
`npm start` atau `npm run start:dev`