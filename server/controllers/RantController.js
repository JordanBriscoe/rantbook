import express from 'express'
import _rantService from '../services/RantService.js'

export default class RantController {

    async getRant(req, res, next) {
        try {
            console.log("made it to getrant")
            let rant = await _rantService.find()
            res.send(rant)
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