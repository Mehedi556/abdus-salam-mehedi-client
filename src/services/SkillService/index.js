"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getSkills = async () => {
  const fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["skills"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/skills`, fetchOptions);
  return res.json();
};

export const createSkill = async (postData) => {
  try {
    const { data } = await axiosInstance.post("/skills", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("skills");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateSkill = async (postData) => {
  try {
    const { data } = await axiosInstance.put(
      `/skills/${postData?._id}`,
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("skills");
    return data;
  } catch (error) {
    throw new Error("Failed to update skill");
  }
};

export const deleteSkill = async (skillData) => {
  try {
    const { data } = await axiosInstance.delete(`/skills/${skillData?._id}`);
    revalidateTag("skills");
    return data;
  } catch (error) {
    throw new Error("Failed to delete skill");
  }
};
