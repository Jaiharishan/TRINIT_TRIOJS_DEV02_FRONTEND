import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { UserCard, BugCard, AddUserModal, AddBugModal } from ".";
import Image from "next/image";
import Link from "next/link";

const OrgPage = ({ org }: any) => {
  //   const array = [1, 1, 1, 1, 1];
  const bugs = org.bugs;
  console.log(bugs);
  return (
    <>
      <div className="bg-gray-900 px-2 mt-20 py-10">
        {org?.profilePic ? (
          <img
            src={`http://localhost:4000${org?.profilePic}`}
            className="rounded-lg w-48 h-48 mb-4 mx-2"
            alt=""
          />
        ) : (
          <div className="rounded-lg w-48 h-48 bg-blue-600 mb-4 mx-2"></div>
        )}

        <div className="py-4 mb-10 text-white border-b border-gray-600">
          <p className="text-3xl">{org?.name}</p>
        </div>

        <div className="text-white text-lg mb-10">{org?.description}</div>
        <div className="flex items-center gap-4">
          <AddUserModal orgId={org?._id}/>

          <AddBugModal orgId={org?._id} />
        </div>
        <p className="mt-16 text-3xl text-white px-2">Head</p>
        <UserCard Name={org?.head?.userName}profilePic={org?.head?.profilePic} />
        <p className="mt-16 text-3xl text-white px-2">Members</p>

        <div className="flex gap-4 w-full flex-wrap">
          {org.rank1.map((member: any) => (
            <UserCard Name={member?.userName}profilePic={member?.profilePic}id={member?._id} />
          ))}
          {org.rank2.map((member: any) => (
            <UserCard Name={member?.userName}profilePic={member?.profilePic} />
          ))}
        </div>

        <p className="mt-16 text-3xl text-white px-2">Open Bugs</p>
        <div className="flex gap-4 w-full flex-wrap">
          {bugs.map((bug: any) => {
            if (bug.status === "open") {
              return (
                <Link href={`/bugs/${bug._id}`}>
                  <a>
                    <BugCard
                      BugName={bug?.title}
                      CreatedBy={bug?.createdBy}
                      Tags={bug?.severity}
                    />
                  </a>
                </Link>
              );
            }
          })}
        </div>

        <p className="mt-16 text-3xl text-white px-2">Closed Bugs</p>
        <div className="flex gap-4 w-full flex-wrap">
          {bugs.map((bug: any) => {
            if (bug.status === "closed") {
              return (
                <Link href={`/bugs/${bug._id}`}>
                  <a>
                    <BugCard
                      BugName={bug?.title}
                      CreatedBy={bug?.createdBy}
                      Tags={bug?.severity}
                    />
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default OrgPage;
