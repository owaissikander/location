import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { auth } from "../../../../auth"
import { redirect } from "next/navigation";


export default async function Layout({ children }) {
    const session = await auth()
    // console.log("session->", session);

    if (!session) redirect('/signin')

    return (
        <html>
            <body>
                <Tabs defaultValue="dashboard" className="w-full text-center mt-4">
                    <TabsList>
                        <Link href={'/admin/dashboard'}>

                            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        </Link>
                        <Link href="/admin/users">

                            <TabsTrigger value="users">Users</TabsTrigger>
                        </Link>
                        <Link href={'/admin/event'}>

                            <TabsTrigger value="event">Events</TabsTrigger>
                        </Link>
                        <Link href={'/admin/categories'}>

                            <TabsTrigger value="categories">Categories</TabsTrigger>
                        </Link>
                        <Link href={'/admin/subcategories'}>
                            <TabsTrigger value="subcategories">SubCategories</TabsTrigger>
                        </Link>


                    </TabsList>
                    <TabsContent value="dashboard">{children}</TabsContent>
                    <TabsContent value="users">{children}</TabsContent>
                    <TabsContent value="event">{children}</TabsContent>
                    <TabsContent value="categories">{children}</TabsContent>
                    <TabsContent value="subcategories">{children}</TabsContent>

                </Tabs>

            </body>
        </html>
    )
}