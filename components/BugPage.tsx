import React, { useEffect } from "react";
import { AssignUserModal, DiscussionCard } from ".";
import Link from "next/link";
import axios_api from "../axios/api";

const BugPage = ({ bug }: any) => {
  const array = [1, 1, 1, 1, 1];
  console.log(bug);
  const handleSubmit = async () => {
    const res = await axios_api.post(`bug/assign/request/${bug._id}/`);
    console.log(res);
  };

  return (
    <div className="bg-gray-900 px-2 mt-20 py-10">
      <div className="py-4 mb-5 text-white border-b border-gray-600">
        <p className="text-3xl">
          <Link href={`/organizations/${bug?.orgId?._id}`}>
            <a className="hover:text-blue-500 hover-style">{bug.orgId.name}</a>
          </Link>
          / {bug?.title}
        </p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="rounded-xl px-4 py-1 border border-gray-600 text-white text-sm cursor-pointer">
          {bug.severity}
        </div>
        <div className="rounded-xl px-4 py-1 border border-gray-600 text-white text-sm cursor-pointer">
          {bug.status}
        </div>
      </div>

      <div className="text-white flex gap-2 text-lg mb-5">
        Assigned to <p className="font-bold">Jaiharishan</p>
      </div>

      <div className="text-white text-lg mb-10">{bug?.description}</div>

      <div className="mb-10 flex gap-4">
        <AssignUserModal bugId={bug._id} />
        <div
          onClick={handleSubmit}
          className="border text-white border-gray-600 px-5 py-2 rounded-md flex items-center gap-2 hover-style"
        >
          Assign me
        </div>
      </div>

      <div className="text-3xl text-white mb-10">Discussions</div>

      <div className="flex flex-wrap gap-6">
        {array.map((elem) => (
          <DiscussionCard />
        ))}
      </div>
    </div>
  );
};

export default BugPage;
