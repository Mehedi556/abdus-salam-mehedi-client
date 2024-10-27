"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCreateSkill } from "@/hooks/skills.hook";

const AddSkillModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { mutate: handleCreateSkill} = useCreateSkill();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      handleCreateSkill({...data, isDeleted: false})
      reset({
        name: '',
        image: ''
      })
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your skill here</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className="w-full flex flex-col gap-y-3 ">
          <div className="flex justify-center">
            <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full overflow-y-scroll">
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                method="POST"
                className="space-y-3 sm:space-y-4 "
              >
                <div className="">
                  <input
                    type="text"
                    {...register("name")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Skill Name"
                  />
                  {errors?.name && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.name?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    {...register("image")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Skill image link"
                  />
                  {errors?.image && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.image?.message}
                    </p>
                  )}
                </div>


                <Button
                  type="submit"
                  className="w-full px-4 py-3 font-semibold text-white bg-colorSecondary rounded-lg  transition duration-300"
                >
                  Create Skill
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddSkillModal;