const express = require('express')
const usersiswa = require('./router/siswa')
const app = express()
const port = 3000
const connectDB = require('./config/db')
const authRoute = require("./router/auth"); //proccess middleware

app.use(express.json()) //fungsinya agar bisa baca inputan dri form || for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(usersiswa)
app.use(authRoute) //proses middleware

connectDB()
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})