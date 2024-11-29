

import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({

    title: { type: String, require: true },
    description: { type: String, require: true },
    thumbnail: { type: String, require: true },
})

export const CategoryModel = mongoose.models.Categories || mongoose.model('Categories', categorySchema);