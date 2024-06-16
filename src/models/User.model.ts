
import UserInterface from "@/interfaces/user.interface";
import UserSchema from "@/schemas/user.schema";
import mongoose from "mongoose";

const UserModel = (mongoose.models.User as mongoose.Model<UserInterface>) || mongoose.model<UserInterface>("User", UserSchema)

export default UserModel