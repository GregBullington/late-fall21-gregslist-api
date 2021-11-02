import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const HouseSchema = new Schema({
  levels: { type: Number, required: false },
  bedrooms: { type: Number, required: false },
  bathrooms: { type: Number, required: false },
  year: { type: Number, required: false },
  imgUrl: { type: String, required: false },
  price: { type: Number, required: false },
  description: { type: String, default: 'Nothing Provided' },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' }
}, { timestamps: true, toJSON: { virtuals: true } })

HouseSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})
