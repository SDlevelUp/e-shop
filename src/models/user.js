import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});

// checks if a model with the name 'User' already exists. If a model with this name exists, it will use it; otherwise, it will create a new model.
const User = mongoose.models.User || mongoose.model("User", UserSchema);


export default User;