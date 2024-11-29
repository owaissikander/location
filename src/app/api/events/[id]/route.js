import { SubCategoryModel } from "@/lib/models/subcategory";
import { CategoryModel } from "@/lib/models/category";
import { eventModel } from "@/lib/models/events";
import { userModel } from "@/lib/models/users";
import { ConnectDB } from "@/lib/db/connectDB";
export async function GET(request, { params }) {
  await ConnectDB();
  let event = await eventModel.findOne({ _id: params.id })
    .populate("category", "title")
    .populate("createdBy", "fullname email profileImg")
    .populate("subcategory", "title")
    .populate("going", "fullname email profileImg"); // Populate going field

  return Response.json(
    {
      msg: "Event Fetched Successfully",
      event,
    },
    { status: 200 }
  );
}