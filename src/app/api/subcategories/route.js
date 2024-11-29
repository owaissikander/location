import { ConnectDB } from "@/lib/db/connectDB";
import { SubCategoryModel } from "@/lib/models/subcategory";

// export async function GET(request) {
//     await ConnectDB();
//     const SubCategories = await SubCategoryModel.find()
//     return Response.json({
//         msg: "fetch Sub Categories successfully",
//         SubCategories
//     }, { status: 200 });
// }

// export async function POST(request) {
//     await ConnectDB();
//     const obj = await request.json()
//     let newSubCategory = new SubCategoryModel(obj)
//     await newSubCategory.save();

//     return Response.json({
//         msg: " newSubCategory added successfully",
//         SubCategories: newSubCategory
//     }, { status: 201 })
// }
export async function GET(request) {
  try {
    await ConnectDB();
    const SubCategories = await SubCategoryModel.find();
    return Response.json({
      msg: "Sub Categories fetched successfully",
      SubCategories,
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching SubCategories:", error);
    return Response.json({ error: "Failed to fetch SubCategories" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const obj = await request.json();
    await ConnectDB();
    const newSubCategory = new SubCategoryModel(obj);
    await newSubCategory.save();

    return Response.json(
      {
        msg: "SubCategory Added Successfully ",
        msg: "SubCategory Added Successfully",
        newSubCategory: SubCategories,
      },
      { status: 201 });
  } catch (error) {
    console.error("Error saving SubCategory:", error);
    return Response.json({ error: "Failed to add SubCategory" }, { status: 500 });
  }
}