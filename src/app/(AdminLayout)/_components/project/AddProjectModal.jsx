"use client";
import CreatableSelect from 'react-select/creatable';
import React, { useState } from "react";
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
import { useCreateExperience } from "@/hooks/experience.hook";
import { useCreateProject } from '@/hooks/project.hook';

export const tags = [
    { value: 'JAVASCRIPT', label: 'JAVASCRIPT' },
    { value: 'PYTHON', label: 'PYTHON' },
    { value: 'JAVA', label: 'JAVA' },
    { value: 'CSHARP', label: 'C#' },
    { value: 'C++', label: 'C++' },
    { value: 'TYPESCRIPT', label: 'TYPESCRIPT' },
    { value: 'RUBY', label: 'RUBY' },
    { value: 'PHP', label: 'PHP' },
    { value: 'SWIFT', label: 'SWIFT' },
    { value: 'KOTLIN', label: 'KOTLIN' }
];



const AddProjectModal = ({ children }) => {
  const [open, setOpen] = useState(false);
    const { mutate: handleCreateProject} = useCreateProject();
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
        handleCreateProject({...data, isDeleted: false})
        reset({
          logo: '',
          title: '',
          technologies: [],
          description: '',
          projectImage: ''
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
          <DialogTitle>Write details about your Project</DialogTitle>
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
                    {...register("title")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project title"
                  />
                  {errors?.title && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.title?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    {...register("logo")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project logo link"
                  />
                  {errors?.logo && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.logo?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    {...register("projectImage")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project Image link"
                  />
                  {errors?.projectImage && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.projectImage?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <textarea
                    {...register("description")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project Description"
                  />
                  {errors?.description && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.description?.message}
                    </p>
                  )}
                </div>

                <div className="">
                  <CreatableSelect
                    placeholder="Tags.."
                    className="text-black bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    closeMenuOnSelect={true}
                    defaultValue={[]}
                    isMulti
                    options={tags}
                    onChange={(selectedOptions) => {
                        console.log(selectedOptions);
                      const valuesArray = selectedOptions.map(
                        (option) => option.value
                      );
                      setValue("technologies", valuesArray);
                    }}
                  />
                  {errors?.tags && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.tags?.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full px-4 py-3 font-semibold text-white bg-colorSecondary rounded-lg  transition duration-300"
                >
                  Create Project
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;
