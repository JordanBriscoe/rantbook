import express from 'express'
import _topicService from '../services/TopicService.js'

export default class TopicController {

    async createTopic(req, res, next) {
        try {
            let topic = await _topicService.create(req.body)
            res.send(topic)
        } catch (err) {
            next(err)
        }
    }

    async getTopic(req, res, next) {
        try {
            let topic = await _topicService.find()
            res.send(topic)
        } catch (err) {
            next(err)
        }
    }

    async getTopicById(req, res, next) {
        try {
            let topic = await _topicService.findById(req.params.topicId)
            res.send(topic)
        } catch (error) {
            next(error)
        }
    }

    constructor() {
        this.router = express.Router()
            .get('', this.getTopic)
            .get('/:topicId', this.getTopicById)
            .post('', this.createTopic)
    }
}