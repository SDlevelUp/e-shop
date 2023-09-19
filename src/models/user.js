import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: string,
    email: string,
    password: string,
    role: string,
})

// checks if a model with the name 'User' already exists. If a model with this name exists, it will use it; otherwise, it will create a new model.
const User = mongoose.models.User || mongoose.model("User", UserSchema);


export default User;