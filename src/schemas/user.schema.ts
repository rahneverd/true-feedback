import UserInterface from "@/interfaces/user.interface"
import { Schema } from "mongoose"
import MessageSchema from "./message.schema"


const UserSchema: Schema<UserInterface> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,

  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  verifyCode: {
    type: String,
    required: false,
  },
  verifyCodeExpiry: {
    type: Date,
    required: false,
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    required: false,
    default: false,
  },
  messages: 
    [MessageSchema]
  
})

export default UserSchema