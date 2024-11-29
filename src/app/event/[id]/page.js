import { getSingleEvent } from "@/actions/events";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
    CalendarIcon,
    ClockIcon,
    MapPinIcon
} from "lucide-react";
import Image from "next/image";
import { auth } from "../../../../auth";
dayjs.extend(relativeTime);

export default async function EventDetailsPage({ params }) {
    const { event } = await getSingleEvent(await params.id);
    //const { comments } = await getComments(params.id);
    console.log("event=======-------------------------->", event);

    //  if (!events) redirect("not-found");
    const session = await auth();

    console.log("event going==>", event);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // const isGoingToEvent =
    //     session && events.going.find((data) => data._id == session.user._id);
    return (
        <div className="min-h-screen bg-background p-6">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <div className="relative w-full h-64 mb-4">
                        <Image
                            src={event.thumbnail}
                            alt={event.title}
                            fill
                            className="object-cover rounded-t-lg"
                        />
                    </div>
                    <Badge className="mb-2 w-36">{event.title}</Badge>
                    <CardTitle className="text-3xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4 mb-4">
                        <CalendarIcon className="text-muted-foreground" />
                        <span>
                            {formatDate(event.startDate)} - {formatDate(event.endDate)}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <ClockIcon className="text-muted-foreground" />
                        <span>
                            {event.startTime} - {event.endTime}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                        <MapPinIcon className="text-muted-foreground" />
                        <span>{event.address}</span>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center space-x-4">
                        {/* <Avatar>
                            <AvatarImage src={event.createdBy.profileImg} />
                            <AvatarFallback>
                                {event.createdBy.fullname.charAt(0)}
                            </AvatarFallback>
                        </Avatar> */}
                        <div>
                            <p className="font-medium">{"ye per createdby ka full name ayega"}</p>
                            <p className="text-sm text-muted-foreground">Event Organizer</p>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Attendees</h3>
                        <div className="flex flex-wrap gap-2">
                            {event?.going?.map((user) => (
                                <Avatar key={user._id} title={user.fullname}>
                                    <AvatarImage src={user.profileImg} />
                                    <AvatarFallback>{user.fullname.charAt(0)}</AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">

                    {session && (
                        <div className="w-full space-y-4">
                            <h2 className="text-xl font-semibold">Comments</h2>
                            <form
                                action={async (formData) => {
                                    "use server";
                                    await addComment({
                                        event: params.id,
                                        user: session.user._id,
                                        comment: formData.get("comment"),
                                    });
                                }}
                                className="space-y-2"
                            >
                                <div className="flex space-x-2">
                                    <Input
                                        className="flex-grow"
                                        name="comment"
                                        placeholder="Add a comment..."
                                    />
                                    <Button type="submit">Post</Button>
                                </div>
                            </form>
                            <div className="space-y-4">
                                {/* {comments && comments.length > 0 ? (
                                    comments.map((comment) => (
                                        <div
                                            key={comment._id}
                                            className="flex items-start space-x-3 bg-muted p-3 rounded-lg"
                                        >
                                            <Avatar title={comment.user.fullname}>
                                                <AvatarImage src={comment.user.profileImg} />
                                                <AvatarFallback>
                                                    {comment.user.fullname.charAt(0)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <p className="font-semibold">{comment.user.fullname}</p>
                                                <p className="text-md font-semibold text-muted-foreground mt-1">
                                                    {comment.comment}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {dayjs().from(dayjs(comment.createdAt))}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-muted-foreground">
                                        No comments yet. Be the first to comment!
                                    </p>
                                )} */}
                                <p className="text-center text-muted-foreground">comment wala seeen hoga</p>
                            </div>
                        </div>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}