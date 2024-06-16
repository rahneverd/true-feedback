import mongoose, {Schema} from "mongoose"
import { MessageInterface } from "@/interfaces/message.interface"

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