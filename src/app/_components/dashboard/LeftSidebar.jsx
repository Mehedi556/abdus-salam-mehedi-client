import { BriefcaseBusiness, CodeXml, FolderOpenDot, House, Logs } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '../../../assets/logo1.png'

const LeftSidebar = () => {
  return (
    <div className="w-full">
      <div className="mt-10">
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="profile picture"
            className="h-16 w-44 p-1  "
          />
        </div>
      </div>

      <div className="mt-10 px-5 flex flex-col gap-y-3">
        <Link
          href={`/dashboard`}
          className="flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-colorSecondary"
        >
          <House className="ml-4 xl:ml-20" />
          <p>Home</p>
        </Link>
        <Link
          href={`/dashboard/projects`}
          className="flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-colorSecondary"
        >
          <FolderOpenDot className="ml-4 xl:ml-20" />
          <p>Projects</p>
        </Link>
        <Link
          href={`/dashboard/skills`}
          className="flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-colorSecondary"
        >
          <CodeXml className="ml-4 xl:ml-20" />
          <p>Skills</p>
        </Link>
        <Link
          href={`/dashboard/experience`}
          className="flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-colorSecondary"
        >
          <BriefcaseBusiness className="ml-4 xl:ml-20" />
          <p>Experience</p>
        </Link>
        <Link
          href={`/dashboard/blogs`}
          className="flex gap-x-3 text-sm lg:text-lg py-4 rounded-xl items-center text-white w-full bg-colorSecondary"
        >
          <Logs className="ml-4 xl:ml-20" />
          <p>Blogs</p>
        </Link>

        {/* <LogoutButton /> */}
      </div>
    </div>
  );
};

export default LeftSidebar;
