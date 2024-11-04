"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getBlogs = async () => {
  const fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["blogs"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/blogs`, fetchOptions);
  return res.json();
};

export const getBlogDetails = async (_id) => {
  const fetchOptions = {
    // method: "GET",
    cache: "no-store",
    next: {
      tags: ["blog-details"],
    },
  };
  console.log(_id);

  const res = await fetch(`${envConfig.baseApi}/blogs/${_id}`, fetchOptions);
  return res.json();
};

export const createBlog = async (postData) => {
  try {
    const { data } = await axiosInstance.post("/blogs", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("blogs");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateBlog = async (postData) => {
  try {
    const { data } = await axiosInstance.put(
      `/blogs/${postData?._id}`,
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("blogs");
    return data;
  } catch (error) {
    throw new Error("Failed to update blog");
  }
};

export const deleteBlog = async (BlogData) => {
  try {
    const { data } = await axiosInstance.delete(`/blogs/${BlogData?._id}`);
    revalidateTag("Blogs");
    return data;
  } catch (error) {
    throw new Error("Failed to delete blog");
  }
};
