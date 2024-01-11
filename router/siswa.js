const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')
const { verifyToken } = require("../middlewares/authJwt"); // untuk mengaktifkan middleware di bagian mana dan letakan VerifyToken

router.get('/Siswa',[verifyToken] , siswacontroller.index) //'/Siswas', controller.class

router.get('/Siswa/:id', siswacontroller.show)

router.post('/Siswa', siswacontroller.store)

router.put('/Siswa/:id', siswacontroller.update)

router.delete('/Siswa/:id', siswacontroller.delete)

module.exports = router