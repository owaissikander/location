import { getSubCategories } from "@/actions/Subcategories"
import { getCategories } from "@/actions/categories"
import AddSubDrawer from "@/components/AddSubDrawer/AddSubDrawer"
import CategoryDropdown from "@/components/CategoryDropdown/CategoryDropdown"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"

// const subcategories = [
//     {
//         title: "celebrity Birthday ",
//         category : "Birthday",
//         thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
//         description: "Specila surprise for birth",

//     },
//     {
//         title: "Legends CyclingCycling ",
//         category : "Cycling",
//         thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
//         description: "Cycling competition for neighbourhood children",

//     },


// ]


export default async function Subcategories({ searchParams }) {

    const subcategories = await getSubCategories(searchParams?.category)
    const categories = (await getCategories()).Categories
    //  console.log( "categories=-=-=-=->", categories);

    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">Subcategories</h1>
                <div className="flex gap-3">
                    <CategoryDropdown categories={categories} />
                    <AddSubDrawer categories={categories} />
                </div>
            </div>
            <Table>
                <TableCaption>A list of your recent Subcategories.</TableCaption>
                <TableHeader>
                    <TableRow>



                        <TableHead className="w-[100px]">Thumbnail</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subcategories?.SubCategories?.map((subcategory) => (
                        <TableRow key={subcategory.title}>
                            <TableCell className="text-right">
                                <Image
                                    src={subcategory.thumbnail}
                                    height={40}
                                    width={40}
                                    className=' rounded-md'
                                />
                            </TableCell>
                            <TableCell className="font-medium">
                                {subcategory.category?.title}
                            </TableCell>
                            <TableCell className="font-medium flex justify-center">{subcategory.title}</TableCell>
                            <TableCell>{subcategory.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}