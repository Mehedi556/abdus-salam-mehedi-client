"use client"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProject } from "@/hooks/project.hook";
import { useState } from "react";

const DeleteProjectModal = ({children, _id}) => {
    const [open, setOpen] = useState(false);

    const { mutate: handleDeleteProject } = useDeleteProject()

    const handleDelete = () => {
        handleDeleteProject({_id: _id});
        setOpen(false);
    };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-left">Delete Project</DialogTitle>
                </DialogHeader>
                <p className="text-sm">
                    {" "}
                    Are you sure, you want to delete this project? The action is
                    irreversible.
                </p>
                <DialogFooter>
                    <div className='flex justify-end'>
                        <button
                            className="bg-red-500 text-white font-semibold px-8 mt-3 py-2 rounded-sm text-sm space-x-2"
                            onClick={handleDelete}
                        >Delete</button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}

export default DeleteProjectModal