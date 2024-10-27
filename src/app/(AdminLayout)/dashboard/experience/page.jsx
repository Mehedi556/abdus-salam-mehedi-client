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

const page = async () => {
  const { data: experiences } = await getExperiences();
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-semibold mb-6">
          Manage Experiences
        </h1>
        <div>
          <AddExperienceModal>
            <span className="bg-colorSecondary rounded py-2 px-3 text-white font-medium">
              Create Experience
            </span>
          </AddExperienceModal>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full table-auto bg-colorSecondary rounded-lg shadow-lg">
          <thead className="bg-colorSecondary">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Employment-period
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-colorSecondary">
            {experiences?.map((experience) => (
              <tr key={experience._id} className={`bg-transparent`}>
                <td className="px-6 py-4 text-white">
                  {experience?.companyName}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {experience?.location}
                </td>
                <td className="px-6 py-4 text-sm text-white">
                  {experience?.employmentPeriod}
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
                            <UpdateExperienceModal experience={experience}>
                              <span className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Edit size={16} />
                                <p>Update</p>
                              </span>
                            </UpdateExperienceModal>

                            <DeleteExperienceModal _id={experience?._id}>
                              <button className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Trash2 className="text-red-600" size={16} />
                                <p>Delete</p>
                              </button>
                            </DeleteExperienceModal>

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
