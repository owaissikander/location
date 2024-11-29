'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon } from 'lucide-react'
import AddEventSheet from '../AddEventSheet/AddEventSheet'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { SearchDropdown } from '../SearchDropdown/SearchDropdown'

// Mock data for events rofessional", "Fitness", "Education", "Cultural"]

export default function UpcomingEvents({ Categories = [], events = [], session }) {

console.log( "event=======================>", events);


    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredEvents = selectedCategory === "All"
        ? events
        : events.filter(event => event.category === selectedCategory)
    
        const searchParams = useSearchParams();
        const pathname = usePathname();
        const handleSelectCategory = (id) => {
            const params = new URLSearchParams(searchParams);
            if (id) {
                params.set("category", id);
            } else {
                params.delete("category");
            }
            //replace(`${pathname}?${params.toString()}`)
        };
        return (
            <div className="min-h-screen bg-background">
                <main className="container mx-auto py-12">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                        <div className="flex gap-4">
                            <SearchDropdown
                                Categories={Categories}
                                onSelectCategory={handleSelectCategory}
                            />

                            {session ? (
                                <AddEventSheet session={session} Categories={Categories} />
                            ) : (
                                <Link href={"/signin"}>
                                    <Button>Login to Add Event</Button>
                                </Link>
                            )}
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <Card key={event._id}>
                                <CardHeader>
                                    <CardTitle>{event.title}</CardTitle>
                                    <CardDescription>{event.category.title}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video w-full mb-4">
                                        <img
                                            src={event.thumbnail}
                                            alt={event.title}
                                            className="object-cover w-full h-full rounded-md"
                                        />
                                    </div>
                                    <p className="flex items-center mb-2">
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {new Date(event.startDate).toLocaleDateString()}{" "}
                                        {event.startTime} - {event.endTime}
                                    </p>
                                    <p className="flex items-center">
                                        <MapPinIcon className="mr-2 h-4 w-4" />
                                        {event.address}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <img
                                            src={event.createdBy.profileImg}
                                            alt={event.createdBy.fullname}
                                            className="w-8 h-8 rounded-full mr-2"
                                        />
                                        <span className="text-sm">{event.createdBy.fullname}</span>
                                    </div>
                                    <Link href={`/event/${event._id}`}>
                                        <Button>View Details</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
            // <div className="min-h-screen bg-background">


            //     <section className="py-12 px-6">
            //         <div className="max-w-6xl mx-auto">
            //             <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>

            //             {/* Category Filter */}
            //             <div className="mb-8">
            //                 <Select onValueChange={setSelectedCategory} defaultValue="All">
            //                     <SelectTrigger className="w-[180px]">
            //                         <SelectValue placeholder="Select category" />
            //                     </SelectTrigger>
            //                     <SelectContent>
            //                         {Categories?.map((category) => (
            //                             <SelectItem key={category._id} value={category}>{category}</SelectItem>
            //                         ))}
            //                     </SelectContent>
            //                 </Select>
            //             </div>

            //             {/* Events Grid */}
            //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            //                 {filteredEvents?.event?.map((data) => (
            //                     <Card key={data._id}>
            //                         <CardHeader>
            //                             <CardTitle>{data.title}</CardTitle>
            //                         </CardHeader>
            //                         <CardContent>
            //                             <div className="aspect-video w-full mb-4">
            //                                 <img
            //                                     src={data.thumbnail}
            //                                     alt={data.title}
            //                                     className="object-cover w-full h-full rounded-md"
            //                                 />
            //                             </div>
            //                             <p className="flex items-center text-muted-foreground mb-2">
            //                                 <CalendarIcon className="mr-2 h-4 w-4" />
            //                                 {data.startDate}
            //                             </p>
            //                             <p className="flex items-center text-muted-foreground">
            //                                 <MapPinIcon className="mr-2 h-4 w-4" />
            //                                 {data.address}
            //                             </p>
            //                         </CardContent>
            //                         <CardFooter>
            //                             <Badge variant="secondary">{data.category.title}</Badge>
            //                         </CardFooter>
            //                     </Card>
            //                 ))}
            //             </div>
            //         </div>
            //     </section>
            // </div>
        )
    }   