import { Schema, model } from 'mongoose'

interface ICheckin {
  location: string
  date: Date
  time: string
}

interface IUser {
  name: string
  email: string
  checkins?: ICheckin[]
  program: string
  role: 'teacher' | 'student'
  avatar: string
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  checkins: [
    {
      date: Date,
      time: String,
      location: String,
    },
  ],
  program: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
})

export default model<IUser>('User', userSchema)
