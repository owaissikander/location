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
import AddSubDrawer from "@/components/AddSubDrawer/AddSubDrawer"

const subcategories = [
    {
        title: "celebrity Birthday ",
        category : "Birthday",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        description: "Specila surprise for birth",

    },
    {
        title: "Legends CyclingCycling ",
        category : "Cycling",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        description: "Cycling competition for neighbourhood children",

    },
 

]


export default function Subcategories() {


    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between">
                <h1>Subcategories</h1>
                <AddSubDrawer/>
            </div>
            <Table>
                <TableCaption>A list of your recent Subcategories.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left">Thumbnail</TableHead>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>category</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subcategories.map((subcategory) => (
                        <TableRow key={subcategory.title}>
                            <TableCell className="text-right">
                                <Image
                                    src={subcategory.thumbnail}
                                    height={40}
                                    width={40}
                                    className=' rounded-md'
                                />
                            </TableCell>

                            <TableCell className="font-medium">{subcategory.title}</TableCell>
                            <TableCell>{subcategory.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}