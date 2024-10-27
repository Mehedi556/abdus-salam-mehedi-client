import { createExperience, deleteExperience, updateExperience } from "@/services/ExperienceService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner"


export const useCreateExperience = () => {
    return useMutation<any, Error>({
        mutationKey: ["CREATE_EXPERIENCE"],
        mutationFn: async (postData) => await createExperience(postData),
        onSuccess: () => {
        toast.success("Experience created successfully");
    },
        onError: (error) => {
        toast.error(error?.message);
    },
    });
};

export const useUpdateExperience = () => {
    return useMutation({
      mutationKey: ["UPDATE_EXPERIENCE"],
      mutationFn: async (postData) => await updateExperience(postData),
      onSuccess: () => {
        toast.success("Experience updated successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useDeleteExperience = () => {
    return useMutation({
      mutationKey: ["DELETE_EXPERIENCE"],
      mutationFn: async (experienceData) => await deleteExperience(experienceData),
      onSuccess: () => {
        toast.success("Experience data deleted successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };