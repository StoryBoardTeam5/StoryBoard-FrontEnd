import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.connect(process.env.MONGODB_URI ?? '', { dbName: 'StoryBoard' })
mongoose.Promise = global.Promise
const AccountsSchema = new Schema(
  {
    email: String,
    userId: mongoose.Types.ObjectId,
  },
  { timestamps: true },
)

const accounts = mongoose.models.Accounts || mongoose.model('Accounts', AccountsSchema)

export default accounts
