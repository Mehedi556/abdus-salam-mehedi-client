"use client";
import CreatableSelect from 'react-select/creatable';
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import {  useUpdateProject } from '@/hooks/project.hook';
import { Plus, TrashIcon } from 'lucide-react';

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



const UpdateProjectModal = ({ children, project }) => {
  const [open, setOpen] = useState(false);
    const { mutate: handleUpdateProject} = useUpdateProject();
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
    reset(project)
}, [project])

const { fields, append, remove } = useFieldArray({
  control,
  name: "features",
});



  const onSubmit = async (data) => {
    try {
        handleUpdateProject(data)
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
                    {...register("logo", {
                        validate: (value) =>
                          /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.+)*\/?$/.test(value) || "Please enter a valid URL."
                      })}
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
                    {...register("projectImage", {
                        validate: (value) =>
                          /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.+)*\/?$/.test(value) || "Please enter a valid URL."
                      })}
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
                    placeholder="Technologies"
                    className="text-black bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    closeMenuOnSelect={true}
                    defaultValue={project?.technologies?.map(tech => ({
                        value: tech,
                        label: tech
                      })) || []}
                    isMulti
                    options={tags}
                    onChange={(selectedOptions) => {
                      const valuesArray = selectedOptions.map(
                        (option) => option.value
                      );
                      setValue("technologies", valuesArray);
                    }}
                  />
                  {errors?.technologies && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.technologies?.message}
                    </p>
                  )}
                </div>

                <div className="">
                  <input
                    type="text"
                    {...register("frontendGithubLink")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project frontend github link"
                  />
                  {errors?.frontendGithubLink && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.frontendGithubLink?.message}
                    </p>
                  )}
                </div>

                <div className="">
                  <input
                    type="text"
                    {...register("backendGithubLink")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project backend github link"
                  />
                  {errors?.backendGithubLink && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.backendGithubLink?.message}
                    </p>
                  )}
                </div>
                
                <div className="">
                  <input
                    type="text"
                    {...register("liveLink")}
                    className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                    placeholder="Project live link"
                  />
                  {errors?.liveLink && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.liveLink?.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-between items-center  px-2 ">
                  <h1 className="text-sm text-black">
                    Add Features as bullet point
                  </h1>
                  <Button
                    type="button"
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
                        {...register(`features.${index}`)}
                        className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500"
                        placeholder="Features"
                      />
                      <Button
                        className="h-10 w-10 flex justify-center items-center rounded-lg bg-red-600 text-white"
                        onClick={() => remove(index)}
                      >
                        <TrashIcon />
                      </Button>
                    </div>
                  ))}
                  {errors?.features && (
                    <p className="text-xs text-red-400 font-bold">
                      {errors?.features?.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full px-4 py-3 font-semibold text-white bg-colorSecondary rounded-lg  transition duration-300"
                >
                  Update Project
                </Button>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProjectModal;
