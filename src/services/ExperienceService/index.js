"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getExperiences = async () => {
  const fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["experiences"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/experiences`, fetchOptions);
  return res.json();
};

export const createExperience = async (postData) => {
  try {
    const { data } = await axiosInstance.post("/experiences", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("experiences");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateExperience = async (postData) => {
  try {
    const { data } = await axiosInstance.put(
      `/experiences/${postData?._id}`,
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("experiences");
    return data;
  } catch (error) {
    throw new Error("Failed to update experience");
  }
};

export const deleteExperience = async (experienceData) => {
  try {
    const { data } = await axiosInstance.delete(
      `/experiences/${experienceData?._id}`
    );
    revalidateTag("experiences");
    return data;
  } catch (error) {
    throw new Error("Failed to delete experience");
  }
};
