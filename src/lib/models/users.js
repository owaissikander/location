

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
    address: String
})

export const userModel = mongoose.models.Users || mongoose.model('Users',  userSchema);