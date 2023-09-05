import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: string,
    email: string,
    password: string,
    role: string,
})

const User = mongoose.model('User', UserSchema)


export default User;