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
});

const User= mongoose.model("User", configSchema);
export default User;