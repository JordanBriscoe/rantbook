import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    name: { type: String, required: true, trim: true }
}, { timestamps: true })

export default mongoose.model('Author', _schema)