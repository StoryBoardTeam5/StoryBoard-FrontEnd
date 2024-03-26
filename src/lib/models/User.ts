import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.connect(process.env.MONGODB_URI ?? '', { dbName: 'StoryBoard' })
mongoose.Promise = global.Promise

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,
    emailVerified: Date,
    storyProgress: String,
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
