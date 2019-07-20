import express from 'express'
import _commentsService from '../services/CommentsService.js'

export default class CommentsController {
    async createComment(req, res, next) {
        try {
            let comment = await _commentsService.create(req.body)
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }



    async deleteComment(req, res, next) {
        try {
            let deleteComment = await _commentsService.findByIdAndDelete(req.params.commentId)
            res.send(deleteComment)
        } catch (error) {
            next(error)
        }
    }


    constructor() {
        this.router = express.Router()
            .post('', this.createComment)
            .delete('/:commentId', this.deleteComment)
    }
}