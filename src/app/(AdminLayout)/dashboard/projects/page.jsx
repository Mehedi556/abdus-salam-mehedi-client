
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
import AddProjectModal from "../../_components/project/AddProjectModal";
import { getProjects } from "@/services/ProjectService";
import Image from "next/image";
import UpdateProjectModal from "../../_components/project/UpdateProjectModal";
import DeleteProjectModal from "../../_components/project/DeleteProjectModal";

const page = async () => {
  const { data: projects } = await getProjects();
  console.log(projects);
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-semibold mb-6">
          Manage Projects
        </h1>
        <div>
          <AddProjectModal>
            <span className="bg-colorSecondary rounded py-2 px-3 text-white font-medium">
              Create Project
            </span>
          </AddProjectModal>
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
                Logo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-colorSecondary">
            {projects?.map((project) => (
              <tr key={project._id} className={`bg-transparent`}>
                <td className="px-6 py-4 text-white">
                  {project?.title}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-white">
                    <Image src={project?.logo} height={30} width={30} alt=""/>
                </td>
                <td className="px-6 py-4 text-sm text-white">
                  {project?.description?.substring(0, 30)}
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
                            <UpdateProjectModal project={project}>
                              <span className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Edit size={16} />
                                <p>Update</p>
                              </span>
                            </UpdateProjectModal>

                            <DeleteProjectModal _id={project?._id}>
                              <button className="flex items-center space-x-2 p-2 text-sm hover:bg-gray-100 w-full rounded">
                                <Trash2 className="text-red-600" size={16} />
                                <p>Delete</p>
                              </button>
                            </DeleteProjectModal>

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
