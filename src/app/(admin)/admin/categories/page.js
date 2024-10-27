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

const categories = [
    {
        title: "Birthday ",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        description: "Specila surprise for birth",

    },
    {
        title: "Cycling ",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        description: "Cycling competition for neighbourhood children",

    },
    {
        title: "Pool party",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        description: "all community member will enjoy pool party",
    },


]


export default function Categories() {


    return (
        <div className="min-h-screen container mx-auto">
            <div className="flex justify-between">
                <h1>Categories</h1>
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
                    {categories.map((category) => (
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