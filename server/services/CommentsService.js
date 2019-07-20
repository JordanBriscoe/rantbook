import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  author: { type: ObjectId, ref: 'Author', required: true, default: '5d32af22f78b3e0880356b5a' }, // default to anon
  content: { type: String, required: true },
  votes: [{ type: String/* './models/Vote' */ }],
  rant: { type: ObjectId, ref: 'Rant', required: true }
}, { timestamps: true })

export default mongoose.model('Comment', _schema)