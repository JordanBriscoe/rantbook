import express from 'express'
import _voteService from '../services/VoteService.js'

export default class VoteController {

    async createVote(req, res, next) {
        try {
            let vote = await _voteService.create(req.body)
            res.send(vote)
        } catch (err) {
            next(err)
        }
    }

    async getVote(req, res, next) {
        try {
            let vote = await _voteService.find()
            res.send(vote)
        } catch (err) {
            next(err)
        }
    }

    async getVotesByRantId(req, res, next) {
        try {
            let votes = await _voteService.find({ rant: req.params.rantId })
            res.send(votes)
        } catch (error) {
            next(error)
        }
    }

    async getVotesByCommentId(req, res, next) {
        try {
            let votes = await _voteService.findById({ rant: req.params.commentId })
            res.send(votes)
        } catch (error) {
            next(error)
        }
    }

    constructor() {
        this.router = express.Router()
            .get('', this.getVote)
            .get('/rant/:rantId', this.getVotesByRantId)
            .get('/comment/:commentId', this.getVotesByCommentId)
            .post('', this.createVote)
    }
}