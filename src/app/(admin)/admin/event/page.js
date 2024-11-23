import { getCategories } from "@/actions/categories"
import { getEvents } from "@/actions/events"
import AddEventSheet from "@/components/AddEventSheet/AddEventSheet"
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
import { auth } from "../../../../../auth"




export default async function Events() {
    const events = await getEvents()
    console.log( 'events00000000>>>>>', events);
    
    const Categories = await getCategories()

    console.log( 'Categories>>>', Categories)
    
    const session = await auth()
    return (
        <div className="min-h-screen mx-10">
            <div className="flex justify-between items-center my-4">
                <h1 className="font-bold text-xl">Events</h1>
                <AddEventSheet session={session} Categories={Categories.Categories} />
            </div>
            <Table>
                <TableCaption>A list of your recent events.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-right">Thumbnail</TableHead>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Date</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events?.events.map((event) => (
                        <TableRow key={event._id}>
                            <TableCell className="text-right">
                                <Image
                                    src={event.thumbnail}
                                    height={40}
                                    width={40}
                                    className=' rounded-md'
                                />
                            </TableCell>

                            <TableCell className="font-medium">{event.title}</TableCell>
                            <TableCell>{event.description}</TableCell>
                            <TableCell>{event.address}</TableCell>
                            <TableCell>{event.startDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}