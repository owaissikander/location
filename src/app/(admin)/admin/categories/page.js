import { description } from "@/components/BarChart/BarChart"
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
import { Button } from "@/components/ui/button"
import AddDrawer from "@/components/AddDrawer/AddDrawer"
import { getCategories } from "@/actions/categories"




export default async function Categories() {

    const categories = await getCategories()

    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">Categories</h1>
                <AddDrawer />
            </div>
            <Table>
                <TableCaption>A list of your recent Categories.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-right">Thumbnail</TableHead>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories?.Categories?.map((category) => (
                        <TableRow key={category.title}>
                            <TableCell className="text-right">
                                <Image
                                    src={category.thumbnail}
                                    height={40}
                                    width={40}
                                    className=' rounded-md'
                                />
                            </TableCell>

                            <TableCell className="font-medium">{category.title}</TableCell>
                            <TableCell>{category.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}