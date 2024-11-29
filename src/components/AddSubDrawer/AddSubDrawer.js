'use client'
import { useRef, useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { uploadImage } from "@/actions/upload";
import { addSubCategory } from "@/actions/Subcategories";
import { useToast } from "@/hooks/use-toast";

export default function AddSubDrawer({ categories }) {
  const [open, setOpen] = useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Sub category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Add Sub category</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm  onClose ={()=> setOpen(false)}  />
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
        <ProfileForm className="px-4" onClose ={()=> setOpen(false)} categories={categories} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className, categories , onClose}) {

  const formRef = useRef()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)


  const handleAddCategory = async (formData) => {

    let uploadLink = await uploadImage(formData);
    //console.log("uploadLink===->", uploadLink);
    setLoading(true);
    const obj = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      thumbnail: uploadLink

    }


      await addSubCategory(obj)
      toast({
        title: "SUbCatergory addded successfully",
      })
      formRef?.current?.reset()
      setLoading(false);
      onClose()
     }

    return (
      <form
        action={handleAddCategory}
        className={cn("grid items-start gap-4", className)}>
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
        <div className="grid gap-2">
          <Select name="category" >
            <SelectTrigger className="">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={undefined}>All</SelectItem>
              {categories?.map((data) => (
                <SelectItem key={data._id} value={data._id}>
                  {data.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    )
  }
