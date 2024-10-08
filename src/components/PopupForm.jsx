import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const PopupForm= ({ isOpen, onClose })=> {

    const FormField = ({ label, id, ...inputProps }) => {
        return (
          <div className="flex flex-col  gap-4">
            <Label htmlFor={id} className="font-bold">
              {label}
            </Label>
            <Input id={id} {...inputProps} className="col-span-3" />
          </div>
        );
      };

      
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit</SheetTitle>
          
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <FormField label="First Name" id="first-name" />
          <FormField label="Last Name" id="last-name" />
          <FormField label="Phone" id="phone" />
          <FormField label="Email" id="email" />
          <FormField label="Property" id="property" />
          <FormField label="Unit" id="unit" />
        </div>
        <SheetFooter >
            <div className={"flex flex-col gap-3  w-full"}>
          <Button type="submit" onClick={onClose} className={"w-full"}>
            Save
          </Button>
          <Button variant="outline" onClick={onClose} className="">
            Cancel
          </Button>
            </div>
        </SheetFooter>
      </SheetContent>
      {/* <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit" onClick={onClose}>
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent> */}
    </Sheet>
  );
}

export default PopupForm;