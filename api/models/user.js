import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure username is unique
    },
    password: {
        type: String,
        required: true,
        select: false, // Do not include password in queries by default
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
});

const User= mongoose.model("User", configSchema);
export default User;