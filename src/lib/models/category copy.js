

import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({

    title: String,
    description: String,
    thumbnail: string
})

export const CategoryModel = mongoose.model('Categories', categorySchema);