

import mongoose from 'mongoose';
const { Schema } = mongoose;

const subcategorySchema = new Schema({

    title: { type: String, require: true },
    description: String,
    thumbnail: { type: String, require: true },
    category: { type: mongoose.Types.ObjectId, ref: "Categories", require: true }
})

export const SubCategoryModel = mongoose.models.SubCategories || mongoose.model('SubCategories', subcategorySchema);