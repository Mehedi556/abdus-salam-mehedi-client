// import { Button } from '@/components/ui/button'
import { Button } from "../../../../components/ui/button";
import React from "react";
import AddExperienceModal from "../../_components/experience/AddExperienceModal";
import { getExperiences } from "@/services/ExperienceService";
import { Edit, Settings, Trash2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UpdateExperienceModal from "../../_components/experience/UpdateExperienceModal";
import DeleteExperienceModal from "../../_components/experience/DeleteExperienceModal";
import { getBlogs } from "@/services/BlogService";
import AddBlogModal from "../../_components/blog/AddBlogModal";
import Image from "next/image";
import UpdateBlogModal from "../../_components/blog/UpdateBlogModal";
import DeleteBlogModal from "../../_components/blog/DeleteBlogModal";

const page = async () => {
  const { data: blogs } = await getBlogs();
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-semibold mb-6">
          Manage Blogs
        </h1>
        <div>
          <AddBlogModal>
            <span className="bg-colorSecondary rounded py-2 px-3 text-white font-medium">
              Create Blog
            </span>
          </AddBlogModal>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full table-auto bg-colorSecondary rounded-lg shadow-lg">
          <thead className="bg-colorSecondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-colorSecondary">
            {blogs?.map((blog) => (
              <tr key={blog._id} className={`bg-transparent`}>
                <td className="px-6 py-4 text-white">
                  {blog?.title?.substring(0, 20)}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-white">
                {blog?.description?.substring(0, 30)}
                
                </td>
                <td className="px-6 py-4 text-sm text-white">
                <Image className="rounded-full" src={blog?.image} height={30} width={30} alt=""/>
                </td>
                <td className="px-6 py-4 flex justify-center space-x-4 text-white">
                <div className="flex justify-end">
                      <Popover>
                        <PopoverTrigger>
                          <Settings className="cursor-pointer text-color-primary h-4 sm:h-6 w-4 sm:w-6" />
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px]">
                          <h1 className="font-bold text-sm border-b pb-2">
                            Actions
                          </h1>
                          <div className="mt-2">
                            <UpdateBlogModal blog={blog}>
                              <span className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Edit size={16} />
                                <p>Update</p>
                              </span>
                            </UpdateBlogModal>

                            <DeleteBlogModal _id={blog?._id}>
                              <button className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Trash2 className="text-red-600" size={16} />
                                <p>Delete</p>
                              </button>
                            </DeleteBlogModal>

                          </div>
                        </PopoverContent>
                      </Popover>

                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
