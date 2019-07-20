import express from 'express'
import bp from 'body-parser'
import cors from 'cors'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())
server.use(cors())

import RantController from './controllers/RantController.js'
import TopicController from './controllers/TopicController.js'
import CommentController from './controllers/CommentsController.js'

server.use('/api/rants', new RantController().router)
server.use('/api/topics', new TopicController().router)
server.use('/api/comments', new CommentController().router)

server.use((error, req, res, next) => {
    res.status(error.status || 400).send(error)
})

server.listen(port, () => {
    console.log("The server is on port: ", port, " .")
})