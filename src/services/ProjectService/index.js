"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getProjects = async () => {
  const fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["projects"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/projects`, fetchOptions);
  return res.json();
};

export const createProject = async (postData) => {
  try {
    const { data } = await axiosInstance.post("/projects", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("projects");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProject = async (postData) => {
  try {
    const { data } = await axiosInstance.put(
      `/projects/${postData?._id}`,
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("projects");
    return data;
  } catch (error) {
    throw new Error("Failed to update project");
  }
};

export const deleteProject = async (projectData) => {
  try {
    const { data } = await axiosInstance.delete(
      `/projects/${projectData?._id}`
    );
    revalidateTag("projects");
    return data;
  } catch (error) {
    throw new Error("Failed to delete project");
  }
};
