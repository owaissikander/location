
import { getCategories } from "@/actions/categories"
import { getEvents } from "@/actions/events"
import { Button } from "@/components/ui/button"
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents"
import { auth } from "../../auth"

// 
export default async function Component() {
  const session = await auth()
  const { events } = await getEvents()
  const { Categories } = await getCategories()
  console.log("events====>", events);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Find Your Friend</h1>
        <p className="text-xl text-muted-foreground mb-8">Discover events and make new connections in your area</p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Events Section */}
      <UpcomingEvents events={events} Categories={Categories}  session={session} />
    </div>
  )
}   