import MessageInterface from "@/interfaces/message.interface"
import { Schema } from "mongoose"

const MessageSchema: Schema<MessageInterface> = new Schema({
  content: {
      type: String,
      required: true
  },
  createdAt: {
      type: Date,
      required: true,
      default: Date.now
  }
})

export default MessageSchema