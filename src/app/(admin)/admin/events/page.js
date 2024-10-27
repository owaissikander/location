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

const events = [
    {
        title: "Birthday Events",
        description: "Specila surprise for birth",
        location: "karachi",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        date: new Date().toLocaleString()

    },
    {
        title: "Cycling Events",
        description: "Cycling competition for neighbourhood children",
        location: "karachi",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        date: new Date().toLocaleString()

    },
    {
        title: "Pool party Events",
        description: "all community member will enjoy pool party",
        location: "karachi",
        thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        date: new Date().toLocaleString()
    },


]


export default function Events() {


    return (
        <div>
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
                    {events.map((event) => (
                        <TableRow key={event.title}>
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
                            <TableCell>{event.location}</TableCell>
                            <TableCell>{event.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}