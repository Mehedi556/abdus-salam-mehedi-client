"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { useUpdateExperience } from "@/hooks/experience.hook";

const UpdateExperienceModal = ({ children, experience }) => {
    const [open, setOpen] = useState(false);
const { mutate: handleUpdateExperience } = useUpdateExperience()
const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
} = useForm();

useEffect(() => {
    reset(experience)
}, [experience])

const { fields, append, remove } = useFieldArray({
    control,
    name: "responsibilities",
});

const onSubmit = async (data) => {
    console.log(data);
    try {
        handleUpdateExperience({...data, _id: experience?._id})
        setOpen(false);
    } catch (error) {
        console.log(error);
    }
};


  const handleFieldAppend = () => {
    append("");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update details about your experience</DialogTitle>
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
                    {...register("companyName")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Company name"
                  />
                  {errors?.companyName && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.companyName?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    {...register("location")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Company location"
                  />
                  {errors?.location && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.location?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    {...register("employmentPeriod")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Employment period"
                  />
                  {errors?.employmentPeriod && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.employmentPeriod?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <textarea
                    {...register("description")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Experience Description"
                  />
                  {errors?.description && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.description?.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center  px-2 ">
                  <h1 className="text-sm text-black">
                    Add Responsibilities as bullet point
                  </h1>
                  <Button
                    className="bg-colorSolid"
                    onClick={() => handleFieldAppend()}
                  >
                    <Plus />
                  </Button>
                </div>

                <div className="space-y-5">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center">
                      <input
                        type="text"
                        {...register(`responsibilities.${index}`)}
                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                        placeholder="Responsibilities"
                      />
                      <Button
                        className="h-10 w-10 flex justify-center items-center rounded-lg bg-red-600 text-white"
                        onClick={() => remove(index)}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  ))}
                  {errors?.responsibilities && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.responsibilities?.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full px-4 py-3 font-semibold text-white bg-colorSecondary rounded-lg  transition duration-300"
                >
                  Update Experience
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateExperienceModal;
