import {Document} from "mongoose"

interface MessageInterface extends Document {
    content: string,
    createdAt: Date
}

export default MessageInterface