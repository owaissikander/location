'use client'
import { useRef, useState } from "react"
import { useToast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadImage } from "@/actions/upload"
import { addCategory } from "@/actions/categories"

export default function AddDrawer() {
  const [open, setOpen] = useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Add category</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }) {


  const formRef = useRef()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)


  const handleAddCategory = async (formData) => {

    let uploadLink = await uploadImage(formData);
    console.log("uploadLink===->", uploadLink);
    setLoading(true);
    const obj = {
      title: formData.get('title'),
      description: formData.get('description'),
      thumbnail: uploadLink

    }
    await addCategory(obj)
    toast({
      title: "Catergory addded successfully",
    })
    formRef?.current?.reset()
    setLoading(false);
  }


  return (
    <form action={handleAddCategory} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input name='title' required type="title" id="title" placeholder="Sports" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Input name='description' required id="description" placeholder="about category" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input name='thumbnail' required type='file' />
      </div>
      <Button disabled={loading} type="submit"> {loading ? "Loading..." : "Add Category"}</Button>
    </form>
  )
}
