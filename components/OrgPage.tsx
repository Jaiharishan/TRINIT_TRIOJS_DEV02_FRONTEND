import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { UserCard, BugCard, AddUserModal, AddBugModal } from ".";

const OrgPage = () => {
  const array = [1, 1, 1, 1, 1];
  return (
    <>
      <div className="bg-gray-900 px-2 mt-20 py-10">
        <div className="py-4 mb-10 text-white border-b border-gray-600">
          <p className="text-3xl">Organization_Name</p>
        </div>

        <div className="text-white text-lg mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa sint
          inventore est sed fugiat delectus nisi soluta suscipit labore
          accusantium, quia tempora voluptate voluptatum quae dolorum error
          velit deleniti expedita.
        </div>
        <div className="flex items-center gap-4">
          <AddUserModal />

          <AddBugModal />
        </div>
        <p className="mt-16 text-3xl text-white px-2">Head</p>
        <UserCard Name="Jaiharishan" />
        <p className="mt-16 text-3xl text-white px-2">Members</p>

        <div className="flex gap-4 w-full flex-wrap">
          {array.map((elem) => (
            <UserCard Name="Zord" />
          ))}
        </div>

        <p className="mt-16 text-3xl text-white px-2">Open Bugs</p>
        <div className="flex gap-4 w-full flex-wrap">
          {array.map((elem) => (
            <BugCard
              BugName="[BUG]: THE RED BUTTON IS NOT WORKING"
              CreatedBy="Jaihrishan"
              Tags={["good", "bounty"]}
            />
          ))}
        </div>

        <p className="mt-16 text-3xl text-white px-2">Closed Bugs</p>
        <div className="flex gap-4 w-full flex-wrap">
          {array.map((elem) => (
            <BugCard
              BugName="[BUG]: THE RED BUTTON IS NOT WORKING"
              CreatedBy="Jaihrishan"
              Tags={["good", "bounty"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OrgPage;
