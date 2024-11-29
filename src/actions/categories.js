'use server'

import { ConnectDB } from "@/lib/db/connectDB";
import { CategoryModel } from "@/lib/models/category";
import { redirect } from "next/navigation";


export const addCategory = async (obj) => {
    // const added = await fetch(`${process.env.BASE_URL}/admin/categories `, {
    //     method: "POST",
    //     body: JSON.stringify(obj),
    // });
    // if (added.ok) {
    //     console.log("Category added successfully");
    //     revalidatePath("/admin/categories");
    // }
    await ConnectDB();
   // const obj = await request.json()
    //console.log("obj rec===============>", obj)
    let newCategory = new CategoryModel(obj)
    await newCategory.save();
    redirect("/admin/categories")
}

export const getCategories = async () => {
    let categories = await fetch(`${process.env.BASE_URL}api/categories`);
    categories = await categories.json();
    console.log("Category Fetched successfully");
    

    return categories;
   
  };