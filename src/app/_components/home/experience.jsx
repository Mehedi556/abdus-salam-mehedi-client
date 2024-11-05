import { getExperiences } from "@/services/ExperienceService";
import { Briefcase } from "lucide-react";
import React from "react";

const Experience = async () => {

  const { data: experiences } = await getExperiences();
  return (
    <section
      id="experience"
      className=" py-16 my-28 rounded-lg shadow-xl shadow-colorPrimary mx-4 xl:mx-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            Where I previously worked
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-300">
            My journey from an intern to a full-time full stack developer.
          </p>
        </div>

        <div className="mt-12 space-y-8 w-full">
          {
            experiences?.map((experience) => (
              <div key={experience?._id} className="bg-colorSecondary shadow-lg shadow-colorPrimary rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center w-full">
            <div className="flex-shrink-0 text-white">
              <Briefcase size={32} />
            </div>
            <div className="w-full">
              <div className="sm:flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {experience?.companyName}
                </h3>
                <p className="text-gray-200">{experience?.employmentPeriod}</p>
              </div>

              <p className=" text-gray-300">{experience?.location}</p>
              <p className="mt-4 text-gray-100">
                {experience?.description}
              </p>
              <ul className="list-disc ml-6 mt-4 text-gray-100 space-y-2">
                {
                  experience?.responsibilities?.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))
                }
                
                
              </ul>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Experience;
