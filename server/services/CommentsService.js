import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  votes: [{ type: String/* './models/Vote' */ }],
  rant: { type: ObjectId, ref: 'Rant', required: true }
}, { timestamps: true })

export default mongoose.model('Comment', _schema)