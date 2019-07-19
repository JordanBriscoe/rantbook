import express from 'express'
import _topicService from '../services/TopicService.js'

export default class TopicController {

    async getTopic(req, res, next) {
        try {
            console.log("made it to gettopic")
            let topic = await _topicService.find()
            res.send(topic)
        } catch (err) {
            next(err)
        }
    }

    constructor() {
        console.log("made it to constructor")
        this.router = express.Router()
            .get('', this.getRant)
        // .get('/:bloggersId/bloggers', this.getAllBloggers)
        // .get('', this.getBloggerByTag)
        // .get('/:blogId', this.getBloggers)
        // .put('/:blogId', this.editBloggers)
        // .post('', this.createBlogger)
        // .delete('/:blogId', this.deletePost)
    }
}