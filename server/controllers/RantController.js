import express from 'express'
import _rantService from '../services/RantService.js'

export default class RantController {

    async createRant(req, res, next) {
        try {
            let rant = await _rantService.create(req.body)
            res.send(rant)
        } catch (error) {
            next(error)
        }
    }

    async getRantsById(req, res, next) {
        try {
            let rant = await _rantService.find({ topic: req.params.topicId })
            res.send(rant)
        } catch (error) {
            next(error)
        }

    }

    async getRant(req, res, next) {
        try {
            console.log("made it to getrant")
            let rant = await _rantService.find()
            res.send(rant)
        } catch (err) {
            next(err)
        }
    }

    async deleteRant(req, res, next) {
        try {
            let deleteRant = await _rantService.findByIdAndDelete(req.params.rantId)
        } catch (error) {
            next(error)
        }
    }

    async editRant(req, res, next) {
        try {
            let editRant = await _rantService.findByIdAndUpdate(req.params.rantId, req.body)
            res.send(rant)
        } catch (error) {
            next(error)
        }
    }

    constructor() {
        console.log("made it to constructor")
        this.router = express.Router()
            .get('', this.getRant)
            .get('/:rantId', this.getRantsById)
            // .get('/:bloggersId/bloggers', this.getAllBloggers)
            // .get('', this.getBloggerByTag)
            // .get('/:blogId', this.getBloggers)
            .put('/:rantId', this.editRant)
            .post('', this.createRant)
            .delete('/:rantId', this.deleteRant)
    }
}