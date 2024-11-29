'use server'

import { redirect } from "next/navigation";


export const addSubCategory = async (obj) => {
    const added = await fetch(`${process.env.BASE_URL}api/subcategories`, {
        method: "POST",
        body: JSON.stringify(),
    });
    if (added.ok) {
        console.log("subcategories added successfully");
    redirect("/admin/subcategories")
         
    }
//    const obj = await request.json()
//     console.log("obj rec===============>", obj)
//     let newSubCategory = new SubCategoryModel(obj)
//     await newSubCategory.save();
}

export const getSubCategories = async (category) => {
    let url;
    if(category){
        url =  `${process.env.BASE_URL}api/subcategories?category=${category}`
    }else{
        url =  `${process.env.BASE_URL}api/subcategories`
    }
    let Subcategories = await fetch(url);
    Subcategories = await Subcategories.json();
    console.log("SubCategories Fetched successfully");
    return Subcategories;
   
  };