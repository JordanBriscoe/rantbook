import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  title: { type: String, maxlength: 60, required: true },
  // slug: { type: String, lowercase: true, unique: true }, 
  author: { type: ObjectId, ref: 'Author', required: true, default: '5d32af22f78b3e0880356b5a' }, // default to anon
  description: { type: String, required: true },
  image: [{ type: String }],
  topic: { type: ObjectId, ref: 'Topic', required: true },
  votes: [{ type: String/* './models/Vote' */ }]
}, { timestamps: true })

export default mongoose.model('Rant', _schema)