import { createProject, deleteProject, updateProject } from "@/services/ProjectService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProject = () => {
    return useMutation({
        mutationKey: ["CREATE_Project"],
        mutationFn: async (projectData) => await createProject(projectData),
        onSuccess: () => {
        toast.success("Project created successfully");
    },
        onError: (error) => {
        toast.error(error?.message);
    },
    });
};

export const useUpdateProject = () => {
    return useMutation({
      mutationKey: ["UPDATE_Project"],
      mutationFn: async (projectData) => await updateProject(projectData),
      onSuccess: () => {
        toast.success("Project updated successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useDeleteProject = () => {
    return useMutation({
      mutationKey: ["DELETE_Project"],
      mutationFn: async (projectData) => await deleteProject(projectData),
      onSuccess: () => {
        toast.success("Project data deleted successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };