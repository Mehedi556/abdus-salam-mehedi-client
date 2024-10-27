import { createBlog, deleteBlog, updateBlog } from "@/services/BlogService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateBlog = () => {
    return useMutation({
        mutationKey: ["CREATE_Blog"],
        mutationFn: async (blogData) => await createBlog(blogData),
        onSuccess: () => {
        toast.success("Blog created successfully");
    },
        onError: (error) => {
        toast.error(error?.message);
    },
    });
};

export const useUpdateBlog = () => {
    return useMutation({
      mutationKey: ["UPDATE_Blog"],
      mutationFn: async (blogData) => await updateBlog(blogData),
      onSuccess: () => {
        toast.success("Blog updated successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  export const useDeleteBlog = () => {
    return useMutation({
      mutationKey: ["DELETE_Blog"],
      mutationFn: async (blogData) => await deleteBlog(blogData),
      onSuccess: () => {
        toast.success("Blog data deleted successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };