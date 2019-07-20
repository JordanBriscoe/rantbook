import express from 'express'
import _authorService from '../services/AuthorService.js'

export default class AuthorController {

    async createAuthor(req, res, next) {
        try {
            let author = await _authorService.create(req.body)
            res.send(author)
        } catch (err) {
            next(err)
        }
    }

    async getAuthorById(req, res, next) {
        try {
            let author = await _authorService.findById(req.body)
            res.send(author)
        } catch (err) {
            next(err)
        }
    }
    constructor() {
        this.router = express.Router()
            .get(':authorId', this.getAuthorById)
            .post('', this.createAuthor)
    }
}