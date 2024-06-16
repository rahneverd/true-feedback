import {Document} from "mongoose"
import MessageInterface from "./message.interface"

interface UserInterface extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: MessageInterface[]
}

export default UserInterface