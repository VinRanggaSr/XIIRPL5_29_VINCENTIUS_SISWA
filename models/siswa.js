const mongoose = require('mongoose')

// models UAS Vincent

const siswaSchema = new mongoose.Schema({
    nis: {
        type: String, 
        required: [true, 'Silahkan isikan nis anda'], 
        unique: true
    },
    nama: {
        type: String, 
        required: [true, 'Silahkan isikan nama'], 
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Silahkan isikan email anda'],
    },
    tgl_lahir: {
        type: Date,
        required: [true, 'Silahkan isikan tanggal lahir'],
    },
    alamat: {
        type: String, 
        required: [true, 'Silahkan isikan alamat'], 
    }

})

module.exports = mongoose.model('siswa', siswaSchema)