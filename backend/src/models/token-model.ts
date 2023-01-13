import { Schema, model } from 'mongoose'

const TokenSchema = new Schema({
	user: {type: Schema.Types.ObjectId, default: false, ref: 'User'},
	refreshToken: {type: String, required: true}
})

module.exports = model('Token', TokenSchema);