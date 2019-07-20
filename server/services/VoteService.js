import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    author: { type: ObjectId, ref: 'Author', required: false },
    value: { type: Number, required: true, min: -1, max: 1 },
    rant: { type: ObjectId, ref: 'Rant' },
    comment: { type: ObjectId, ref: 'Comment' }
}, { timestamps: true })

export default mongoose.model('Vote', _schema)