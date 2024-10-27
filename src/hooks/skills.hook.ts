import { createSkill, deleteSkill, updateSkill } from "@/services/SkillService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateSkill = () => {
    return useMutation({
        mutationKey: ["CREATE_SKILL"],
        mutationFn: async (skillData) => await createSkill(skillData),
        onSuccess: () => {
        toast.success("Skill created successfully");
    },
        onError: (error) => {
        toast.error(error?.message);
    },
    });
};

export const useUpdateSkill = () => {
    return useMutation({
      mutationKey: ["UPDATE_SKILL"],
      mutationFn: async (skillData) => await updateSkill(skillData),
      onSuccess: () => {
        toast.success("Skill updated successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useDeleteSkill = () => {
    return useMutation({
      mutationKey: ["DELETE_SKILL"],
      mutationFn: async (skillData) => await deleteSkill(skillData),
      onSuccess: () => {
        toast.success("Skill data deleted successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };