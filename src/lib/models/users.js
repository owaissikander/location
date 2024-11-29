

import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

    fullname: String,
    email: String,
    password: String,
    location: {
        lat: Number,
        long: Number,
    },
    profileImg: String,
    address: String,
    role: {
        type: String, default: "user",
        enum: ['user', "Admin"]
    }
})

export const userModel = mongoose.models.Users || mongoose.model('Users', userSchema);


