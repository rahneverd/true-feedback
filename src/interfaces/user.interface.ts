import {Document} from "mongoose"
import { MessageInterface } from "./message.interface"

export interface UserInterface extends Document {
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isAcceptingMessage: boolean,
    messages: MessageInterface[]
}