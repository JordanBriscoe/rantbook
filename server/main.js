import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())

import RantController from './controllers/RantController.js'

server.use('/api/', new RantController().router)
server.use('*', (req, res, next) => {
    console.log("bailed out: ")
})

server.use((error, req, res, next) => {
    res.status(error.status || 400).send(error)
})

server.listen(port, () => {
    console.log("The server is on port: ", port, " .")
})