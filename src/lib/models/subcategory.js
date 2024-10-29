

import mongoose from 'mongoose';
const { Schema } = mongoose;

const subcategorySchema = new Schema({

    title: String,
    description: String,
    thumbnail: string,
    category: { type: mongoose.Types.ObjectId, ref: "Categories" }
})

export const SubCategoryModel = mongoose.model('SubCategories', subcategorySchema);