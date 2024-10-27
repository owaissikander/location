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

const users = [
    {
        fullName: "Khan",
        email: "khan12@gmail.com",
        location: "karachi",
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        events: 5
    },
    {
        fullName: "LalaRukh Khan",
        email: "lala23@gmail.com",
        location: "karachi",
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        events: 5
    },
    {
        fullName: "shahrukh Khan",
        email: "Shahrukh12@gmail.com",
        location: "karachi",
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        events: 5
    }

]


export default function Users() {


    return (
        <div>
            <Table>
                <TableCaption>A list of your recent users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-right">Profile Image</TableHead>
                        <TableHead className="w-[100px]">Full name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Events</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.fullName}>
                            <TableCell className="text-right">
                                <Image
                                    src={user.profileImage}
                                    height={40}
                                    width={40}
                                    className=' rounded-md'
                                />
                            </TableCell>

                            <TableCell className="font-medium">{user.fullName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.location}</TableCell>
                            <TableCell>{user.events}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>

        </div>
    )
}