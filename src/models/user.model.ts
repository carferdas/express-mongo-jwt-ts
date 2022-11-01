import { Document, model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  avatar?: string,
  createdAt: Date,
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please use a valid address'],
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Please use minimum of 8 characters"],
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
  }
}).pre("save", async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 8)
  this.createdAt = (new Date)
  next()
})

export const User = model<IUser>("User", UserSchema)