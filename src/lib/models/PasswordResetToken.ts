import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.connect(process.env.MONGODB_URI ?? '', { dbName: 'StoryBoard' })
mongoose.Promise = global.Promise

const passwordResetTokenSchema = new Schema(
  {
    email: String,
    token: String,
    expires: Date,
  },
  { timestamps: true },
)

const User = mongoose.models.PasswordResetToken || mongoose.model('PasswordResetToken', passwordResetTokenSchema)

export default User
