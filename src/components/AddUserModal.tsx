import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form"
import { useAppDispatch } from "@/redux/hook"
import { addUser } from "@/redux/features/user/userSlice"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"


export function AddUserModal() {
  const form = useForm()
  const dispatch = useAppDispatch()

  // Handle add user form
  const handleAddUser: SubmitHandler<FieldValues> = (data: any) => {
    dispatch(addUser(data))
  }

  return (
    <Dialog>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button variant="outline">Add User</Button>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center mb-5">Add a User</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddUser)} className="space-y-4">
            {/* users first and last name */}
            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ''} placeholder="First Name" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ''} placeholder="Last Name" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* user email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} value={field.value || ''} placeholder="User Email" />
                  </FormControl>
                </FormItem>
              )}
            />


            <DialogFooter className="mt-10">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Add User</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUserModal
