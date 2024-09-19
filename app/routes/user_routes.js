const express = require('express')
const controllerUser = require('../controller/control_user')
const controllerCrud = require('../controller/control_crud')

const router = express.Router()

router.post('/register', controllerUser.register)

router.post('/login', controllerUser.login)

router.post('/createBarang', controllerCrud.createBarang)

router.get('/getBarang', controllerCrud.readBarang)

router.delete('/deleteBarang/:barang_id', controllerCrud.deleteBarang)

router.patch('/updateBarang/:barang_id', controllerCrud.editBarang)

module.exports = router