import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    title: { type: String, maxlength: 60, required: true },
    // slug: { type: String, lowercase: true, unique: true }, 
    author: { type: String, required: true },
    description: { type: String, required: true },
    // tags: [{ type: String}]
    topic: { type: ObjectId, ref: 'Topic', required: true },
    votes: [{ type: String/* './models/Vote' */ }]
}, { timestamps: true })

export default mongoose.model('Rant', _schema)